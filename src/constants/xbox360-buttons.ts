// tslint:disable: no-magic-numbers
import { InputAxis, InputButton } from '@src/interfaces';

const PAD_NAME = 'Xbox 360 Controller (XInput STANDARD GAMEPAD)';
type Button =
  | 'UP'
  | 'DOWN'
  | 'LEFT'
  | 'RIGHT'
  | 'A'
  | 'B'
  | 'X'
  | 'Y'
  | 'LB'
  | 'RB'
  | 'LT'
  | 'RT'
  | 'LSB'
  | 'RSB'
  | 'BACK'
  | 'START';
type Axis = 'LSX' | 'LSY' | 'RSX' | 'RSY';

export const XBOX360_BUTTON: {
  [button in Button]: InputButton;
} = {
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
  A: {
    type: 'button',
    pad: PAD_NAME,
    button: 0,
  },
  B: {
    type: 'button',
    pad: PAD_NAME,
    button: 1,
  },
  X: {
    type: 'button',
    pad: PAD_NAME,
    button: 2,
  },
  Y: {
    type: 'button',
    pad: PAD_NAME,
    button: 3,
  },
  LB: {
    type: 'button',
    pad: PAD_NAME,
    button: 4,
  },
  RB: {
    type: 'button',
    pad: PAD_NAME,
    button: 5,
  },
  LT: {
    type: 'button',
    pad: PAD_NAME,
    button: 6,
  },
  RT: {
    type: 'button',
    pad: PAD_NAME,
    button: 7,
  },
  LSB: {
    type: 'button',
    pad: PAD_NAME,
    button: 10,
  },
  RSB: {
    type: 'button',
    pad: PAD_NAME,
    button: 11,
  },
  BACK: {
    type: 'button',
    pad: PAD_NAME,
    button: 8,
  },
  START: {
    type: 'button',
    pad: PAD_NAME,
    button: 9,
  },
};

export const XBOX360_AXIS: {
  [button in Axis]: InputAxis;
} = {
  LSX: {
    type: 'axis',
    pad: PAD_NAME,
    axis: 0,
  },
  LSY: {
    type: 'axis',
    pad: PAD_NAME,
    axis: 1,
  },
  RSX: {
    type: 'axis',
    pad: PAD_NAME,
    axis: 2,
  },
  RSY: {
    type: 'axis',
    pad: PAD_NAME,
    axis: 3,
  },
};
