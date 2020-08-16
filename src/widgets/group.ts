import { WidgetGroup } from '@src/constants';
import { createElem, addLabels } from '@src/dom';
import { renderWidget } from '.';

export function renderGroup(def: WidgetGroup): HTMLElement {
  const widget = createElem({
    classes: 'widget-group',
    styles: def.styles?.widget,
    data: { name: def.name },
  });

  addLabels(widget, def.labels);

  def.children.forEach((child) => {
    const w = renderWidget(child);
    if (w) {
      widget.appendChild(w);
    }
  });

  return widget;
}
