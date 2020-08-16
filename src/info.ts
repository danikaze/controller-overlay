import { Config } from './constants';

export function updateInfo(config: Config) {
  updateConfig(config);
  updateSize();
  updateUrl();
  updateUa();
}

function updateConfig(config: Config) {
  setInfoElement('config-name', config.name);
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
