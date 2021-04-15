import { WidgetGroup } from '@src/interfaces';
import { createElem, addLabels, appendChildren } from '@src/dom';
import { renderWidget } from '.';

export function renderGroup(def: WidgetGroup): HTMLElement {
  const widget = createElem({
    classes: 'widget-group',
    styles: def.styles?.widget,
    data: { name: def.name },
  });

  addLabels(widget, def.labels);

  def.children.forEach((child) => {
    const children = renderWidget(child);
    appendChildren(widget, children);
  });

  return widget;
}
