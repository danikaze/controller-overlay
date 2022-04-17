import { InputKeyAsButton } from '@src/interfaces';

type Key =
  | 'KeyA'
  | 'KeyS'
  | 'KeyZ'
  | 'KeyX'
  | 'Space'
  | 'Backspace'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight';

export function key(key: Key): InputKeyAsButton {
  return {
    key,
    type: 'key-as-button',
  };
}
