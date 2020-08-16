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
  const heightFixPx = 3;

  let w = 0;
  let h = 0;

  Array.from(document.querySelectorAll('.widget')).forEach((elem) => {
    const bounds = elem.getBoundingClientRect();
    w = Math.max(w, bounds.right);
    h = Math.max(h, bounds.bottom);
  });

  setInfoElement('container-size', `${w} x ${h + heightFixPx}`);
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
