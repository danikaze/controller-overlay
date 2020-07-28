import { WidgetLabel } from './constants';

export interface DivOptions {
  id?: string;
  classes?: string | string[] | undefined;
  styles?: { [key: string]: string };
  parent?: HTMLElement;
  text?: string;
  data?: { [key: string]: string | number };
}

export function createDiv(options: DivOptions = {}): HTMLDivElement {
  const div = document.createElement('div');

  if (options.id) {
    div.id = options.id;
  }

  if (options.classes) {
    if (typeof options.classes === 'string') {
      div.className = options.classes;
    } else {
      div.classList.add(...options.classes);
    }
  }

  if (options.styles) {
    Object.entries(options.styles).forEach(([key, value]) => {
      div.style.setProperty(key, value);
    });
  }

  if (options.parent) {
    options.parent.appendChild(div);
  }

  if (options.text) {
    div.innerText = options.text;
  }

  if (options.data) {
    Object.entries(options.data).forEach(([key, value]) => {
      div.dataset[key] = String(value);
    });
  }

  return div;
}

export function addLabels(elem: HTMLElement, labels?: WidgetLabel): void {
  if (!labels) return;

  Object.entries(labels).forEach(([key, text]) => {
    createDiv({
      text,
      classes: `label label-${key}`,
      parent: elem,
    });
  });
}
