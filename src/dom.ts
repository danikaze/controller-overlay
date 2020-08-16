import { WidgetLabel, Image } from './constants';

export interface DivOptions<T extends keyof HTMLElementTagNameMap = 'div'> {
  id?: string;
  type?: T;
  classes?: string | string[] | undefined;
  styles?: { [key: string]: string };
  parent?: HTMLElement;
  children?: HTMLElement[];
  text?: string;
  data?: { [key: string]: string | number };
  attr?: { [key: string]: string | number };
}

export function appendChildren(
  parent: HTMLElement,
  children?: HTMLElement | HTMLElement[]
): void {
  if (!children) return;

  (Array.isArray(children) ? children : [children]).forEach((child) => {
    parent.appendChild(child);
  });
}

export function createElem<T extends keyof HTMLElementTagNameMap = 'div'>(
  options: DivOptions<T> = {}
): HTMLElementTagNameMap[T] {
  const div = document.createElement(
    options.type || ('div' as keyof HTMLElementTagNameMap)
  );

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
      // using style.setProperty doesn't work for all values :(
      // tslint:disable: no-any
      div.style[key as any] = value;
    });
  }

  if (options.parent) {
    options.parent.appendChild(div);
  }

  appendChildren(div, options.children);

  if (options.text) {
    div.innerText = options.text;
  }

  if (options.data) {
    Object.entries(options.data).forEach(([key, value]) => {
      div.dataset[key] = String(value);
    });
  }

  if (options.attr) {
    Object.entries(options.attr).forEach(([key, value]) => {
      div.setAttribute(key, String(value));
    });
  }

  return div as HTMLElementTagNameMap[T];
}

export function addLabels(elem: HTMLElement, labels?: WidgetLabel): void {
  if (!labels) return;

  Object.entries(labels).forEach(([key, text]) => {
    createElem({
      text,
      classes: `label label-${key}`,
      parent: elem,
    });
  });
}

export function renderImage(image: Image): HTMLDivElement {
  const container = createElem({
    classes: 'img-container',
    styles: {
      top: getPx(image.top || 0),
      left: getPx(image.left || 0),
      width: getPx(image.width),
      height: getPx(image.height),
      zIndex: String(image.zIndex || 0),
    },
  });

  if (image.width || image.height || image.offsetX || image.offsetY) {
    container.style.overflow = 'hidden';
  }

  const img = createElem({
    type: 'img',
    parent: container,
    attr: {
      src: image.src,
    },
    styles: {
      top: getPx(-1 * image.offsetY!),
      left: getPx(-1 * image.offsetX!),
    },
  });
  img.src = image.src;

  return container;
}

function getPx(value?: number | string): string {
  if (isNaN(value as number)) return '';
  if (typeof value === 'number') return `${value}px`;
  return value!;
}
