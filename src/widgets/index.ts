import { Widget } from '@src/constants';
import { renderButton } from './button';
import { renderAxis } from './axis';
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
    return renderAxis(widget);
  }
}
