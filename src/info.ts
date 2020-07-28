export function updateInfo() {
  updateSize();
  updateUrl();
  updateUa();
}

function updateSize() {
  const heightFixPx = 3;
  const elem = document.getElementById('container-size');
  if (!elem) return;

  let w = 0;
  let h = 0;

  Array.from(document.querySelectorAll('.widget')).forEach((elem) => {
    const bounds = elem.getBoundingClientRect();
    w = Math.max(w, bounds.right);
    h = Math.max(h, bounds.bottom);
  });

  elem.innerText = `${w} x ${h + heightFixPx}`;
}

function updateUrl() {
  const elem = document.getElementById('obs-url');
  if (!elem) return;

  const url = `${location.protocol}//${location.pathname}?display=1`;
  elem.innerText = url;
}

function updateUa() {
  const elem = document.getElementById('ua-info');
  if (!elem) return;

  elem.innerText = navigator.userAgent;
}
