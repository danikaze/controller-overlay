import {
  WidgetButton,
  InputButton,
  InputAxisAsButton,
  InputButtonConditionNot,
  InputButtonConditionAnd,
  InputButtonConditionOr,
  InputKeyAsButton,
} from '@src/interfaces';
import { createElem, addLabels, renderImage } from '@src/dom';
import {
  onButtonChange,
  onAxisChange,
  getButton,
  getAxis,
} from '@src/controllers';
import { onKeyChange } from '@src/keyboard';

export function renderButton(def: WidgetButton): HTMLElement | HTMLElement[] {
  return def.images ? renderImagebutton(def) : renderCssButton(def);
}

function renderCssButton(def: WidgetButton): HTMLElement {
  const widget = createElem({
    classes: 'widget button',
    styles: {
      width: '50px',
      height: '30px',
      ...def.styles?.widget,
    },
  });

  createElem({
    classes: 'input',
    parent: widget,
  });

  addLabels(widget, def.labels);
  addBehavior(def, widget);

  return widget;
}

function renderImagebutton(def: WidgetButton): HTMLElement | HTMLElement[] {
  const defs = Array.isArray(def.images!) ? def.images : [def.images!];
  const imgs = defs.map(renderImage);
  const widget = createElem({
    classes: 'image-button-digital',
    children: imgs,
    data: {
      button: def.name,
    },
  });

  addBehavior(def, widget);

  return widget;
}

function addBehavior(def: WidgetButton, elem: HTMLElement): void {
  const { input } = def;
  if (isInputButton(input)) {
    onButtonChange(input.pad, input.button, (button) => {
      buttonElemSetPressed(elem, button.pressed);
    });
  } else if (isInputAxisAsButton(input)) {
    onAxisChange(input.pad, input.axis, (value) => {
      const pressed = value >= input.min && value <= input.max;
      buttonElemSetPressed(elem, pressed);
    });
  } else if (isKeyAsButton(input)) {
    onKeyChange(input.key, (pressed) => {
      buttonElemSetPressed(elem, pressed);
    });
  } else {
    onAnyChange(input, () =>
      buttonElemSetPressed(elem, evalButtonInput(input))
    );
  }
}

function buttonElemSetPressed(elem: HTMLElement, pressed: boolean): void {
  if (pressed) {
    elem.classList.add('pressed');
  } else {
    elem.classList.remove('pressed');
  }
}

function onAnyChange(input: WidgetButton['input'], callback: () => void) {
  if (isInputButton(input)) {
    onButtonChange(input.pad, input.button, () => {
      callback();
    });
  } else if (isInputAxisAsButton(input)) {
    onAxisChange(input.pad, input.axis, () => {
      callback();
    });
  } else if (isInputButtonConditionNot(input)) {
    onAnyChange(input.not, callback);
  } else if (isInputButtonConditionAnd(input)) {
    input.and.forEach((cond) => onAnyChange(cond, callback));
  } else if (isInputButtonConditionOr(input)) {
    input.or.forEach((cond) => onAnyChange(cond, callback));
  }
}

function evalButtonInput(input: WidgetButton['input']): boolean {
  if (isInputButton(input)) {
    const button = getButton(input.pad, input.button);
    if (button === undefined) return false;
    return button.pressed;
  }
  if (isInputAxisAsButton(input)) {
    const axis = getAxis(input.pad, input.axis);
    if (axis === undefined) return false;
    return axis >= input.min && axis <= input.max;
  }
  if (isInputButtonConditionNot(input)) {
    return !evalButtonInput(input.not);
  }
  if (isInputButtonConditionAnd(input)) {
    return input.and.every((cond) => evalButtonInput(cond));
  }
  if (isInputButtonConditionOr(input)) {
    return input.or.some((cond) => evalButtonInput(cond));
  }
  throw new Error('Unknown WidgetButton.input');
}

function isInputButton(input: WidgetButton['input']): input is InputButton {
  return (input as InputButton).type === 'button';
}
function isInputAxisAsButton(
  input: WidgetButton['input']
): input is InputAxisAsButton {
  return (input as InputAxisAsButton).type === 'axis-as-button';
}
function isKeyAsButton(
  input: WidgetButton['input']
): input is InputKeyAsButton {
  return (input as InputKeyAsButton).type === 'key-as-button';
}
function isInputButtonConditionNot(
  input: WidgetButton['input']
): input is InputButtonConditionNot {
  return (input as InputButtonConditionNot).not !== undefined;
}
function isInputButtonConditionAnd(
  input: WidgetButton['input']
): input is InputButtonConditionAnd {
  return (input as InputButtonConditionAnd).and !== undefined;
}
function isInputButtonConditionOr(
  input: WidgetButton['input']
): input is InputButtonConditionOr {
  return (input as InputButtonConditionOr).or !== undefined;
}
