import { Config } from './interfaces';
import { createElem } from './dom';

export function updateInfo(
  config: Config,
  mappings: { [ket: string]: Config }
) {
  updateConfig(config, mappings);
  updateSize();
  updateUrl();
  updateUa();
}

function updateConfig(
  activeConfig: Config,
  mappings: { [ket: string]: Config }
) {
  const optionElem = document.querySelector<HTMLSelectElement>('.config-name')!;
  Object.entries(mappings).forEach(([key, config]) => {
    createElem({
      type: 'option',
      text: config.name,
      parent: optionElem,
      data: {
        config: key,
      },
      attr: {
        selected: activeConfig === config ? true : undefined,
      },
    });
  });

  optionElem.addEventListener('change', () => {
    const url = new URL(location.href);
    const selectedOption = optionElem.selectedOptions[0];
    url.searchParams.set('config', selectedOption.dataset.config as string);
    location.href = url.href;
  });
}

function updateSize() {
  let w = 0;
  let h = 0;

  Array.from(document.querySelectorAll('.widget,.img-container')).forEach(
    (elem) => {
      const bounds = elem.getBoundingClientRect();
      if (!bounds.width || !bounds.height) {
        Array.from(elem.children).forEach((child) => {
          const bounds = child.getBoundingClientRect();
          w = Math.max(w, bounds.right);
          h = Math.max(h, bounds.bottom);
        });
      } else {
        w = Math.max(w, bounds.right);
        h = Math.max(h, bounds.bottom);
      }
    }
  );

  setInfoElement('container-size', `${w} x ${h}`);
}

function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set('display', '1');
  setInfoElement('obs-url', url.href);
}

function updateUa() {
  setInfoElement('ua-info', navigator.userAgent);
}

function setInfoElement(classname: string, info: string = '') {
  document
    .querySelectorAll<HTMLSpanElement>(`#info .${classname} span`)
    .forEach((elem) => {
      elem.innerText = info;
    });
}
