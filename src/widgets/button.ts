import { WidgetButton, InputButton, InputAxisAsButton } from '@src/interfaces';
import { createElem, addLabels, renderImage } from '@src/dom';
import { onButtonChange, onAxisChange } from '@src/controllers';

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
  if (def.input.type === 'button') {
    addButtonBehavior(def.input, elem);
  } else if (def.input.type === 'axis-as-button') {
    addAxisToButtonBehavior(def.input, elem);
  }
}

function addButtonBehavior(input: InputButton, elem: HTMLElement): void {
  onButtonChange(input.pad, input.button, (button) => {
    buttonElemSetPressed(elem, button.pressed);
  });
}

function addAxisToButtonBehavior(
  input: InputAxisAsButton,
  elem: HTMLElement
): void {
  onAxisChange(input.pad, input.axis, (value) => {
    const pressed = value >= input.min && value <= input.max;
    buttonElemSetPressed(elem, pressed);
  });
}

function buttonElemSetPressed(elem: HTMLElement, pressed: boolean): void {
  if (pressed) {
    elem.classList.add('pressed');
  } else {
    elem.classList.remove('pressed');
  }
}
