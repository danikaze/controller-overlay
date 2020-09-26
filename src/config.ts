import { Config } from './constants';
import { renderWidget } from './widgets';
import { renderImage, appendChildren } from './dom';
import { useStyle } from './style';

export function renderConfig(config: Config): void {
  if (config.style) {
    useStyle(config.style);
  }

  const ROOT_ID = 'container';
  let parent = document.getElementById(ROOT_ID)!;

  if (!parent) {
    parent = document.createElement('div');
    parent.id = ROOT_ID;
  }

  config.images &&
    config.images.forEach((def) => {
      const img = renderImage(def);
      if (img) {
        parent.appendChild(img);
      }
    });

  config.widgets &&
    config.widgets.forEach((def) => {
      const widget = renderWidget(def);
      appendChildren(parent, widget);
    });
}
