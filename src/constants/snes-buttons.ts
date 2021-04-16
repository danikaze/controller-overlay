// tslint:disable: no-magic-numbers
import { InputButton } from '@src/interfaces';

const PAD_NAME =
  'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)';

type Button =
  | 'UP'
  | 'DOWN'
  | 'LEFT'
  | 'RIGHT'
  | 'SELECT'
  | 'START'
  | 'A'
  | 'B'
  | 'X'
  | 'Y'
  | 'L'
  | 'R';

export const SNES_BUTTON: { [button in Button]: InputButton } = {
  UP: {
    type: 'button',
    pad: PAD_NAME,
    button: 12,
  },
  DOWN: {
    type: 'button',
    pad: PAD_NAME,
    button: 13,
  },
  LEFT: {
    type: 'button',
    pad: PAD_NAME,
    button: 14,
  },
  RIGHT: {
    type: 'button',
    pad: PAD_NAME,
    button: 15,
  },
  SELECT: {
    type: 'button',
    pad: PAD_NAME,
    button: 8,
  },
  START: {
    type: 'button',
    pad: PAD_NAME,
    button: 9,
  },
  A: {
    type: 'button',
    pad: PAD_NAME,
    button: 1,
  },
  B: {
    type: 'button',
    pad: PAD_NAME,
    button: 0,
  },
  X: {
    type: 'button',
    pad: PAD_NAME,
    button: 3,
  },
  Y: {
    type: 'button',
    pad: PAD_NAME,
    button: 2,
  },
  L: {
    type: 'button',
    pad: PAD_NAME,
    button: 4,
  },
  R: {
    type: 'button',
    pad: PAD_NAME,
    button: 5,
  },
};
