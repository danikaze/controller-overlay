type KeyListener = (pressed: boolean) => void;

export function onKeyChange(key: string, callback: KeyListener): void {
  window.addEventListener('keydown', (event) => {
    if (event.code !== key) return;
    callback(true);
  });
  window.addEventListener('keyup', (event) => {
    if (event.code !== key) return;
    callback(false);
  });
}
