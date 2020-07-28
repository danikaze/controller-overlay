import { Config } from './constants';
import { renderWidget } from './widgets';

export function renderConfig(config: Config): void {
  const ROOT_ID = 'container';
  let parent = document.getElementById(ROOT_ID)!;

  if (!parent) {
    parent = document.createElement('div');
    parent.id = ROOT_ID;
  }

  config.widgets.forEach((def) => {
    const widget = renderWidget(def);
    if (widget) {
      parent.appendChild(widget);
    }
  });
}
