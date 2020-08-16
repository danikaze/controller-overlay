import { WidgetButton } from '@src/constants';
import { createElem, addLabels } from '@src/dom';
import { onButtonChange } from '@src/controllers';

export function renderButton(def: WidgetButton): HTMLElement {
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

function addBehavior(def: WidgetButton, widget: HTMLElement): void {
  onButtonChange(def.input.pad, def.input.button, (button) => {
    if (button.pressed) {
      widget.classList.add('pressed');
    } else {
      widget.classList.remove('pressed');
    }
  });
}
