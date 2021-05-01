import { Widget } from '@src/interfaces';
import { renderButton } from './button';
import { renderCssAxis, renderImageAxis } from './axis';
import { renderGroup } from './group';

export function renderWidget(
  widget: Widget
): HTMLElement | HTMLElement[] | undefined {
  if (widget.type === 'group') {
    return renderGroup(widget);
  }
  if (widget.type === 'button') {
    return renderButton(widget);
  }
  if (widget.type === 'axis') {
    return renderCssAxis(widget);
  }
  if (widget.type === 'axis-image') {
    return renderImageAxis(widget);
  }
}
