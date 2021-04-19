// tslint:disable: no-magic-numbers
import { InputAxisAsButton, InputButton } from '@src/interfaces';

const PAD_NAME = 'USB Gamepad (Vendor: 2563 Product: 0575)';

type Button =
  | 'UP'
  | 'DOWN'
  | 'LEFT'
  | 'RIGHT'
  | 'UP_LEFT'
  | 'UP_RIGHT'
  | 'DOWN_LEFT'
  | 'DOWN_RIGHT'
  | 'SELECT'
  | 'START'
  | 'A'
  | 'B'
  | 'C'
  | 'D';

export const NEOGEO_MINI_BUTTON: {
  [button in Button]: InputAxisAsButton | InputButton;
} = {
  UP: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: -1,
    max: -1,
  },
  DOWN: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: 0.1,
    max: 0.2,
  },
  LEFT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: 0.7,
    max: 0.8,
  },
  RIGHT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: -0.5,
    max: -0.4,
  },
  UP_LEFT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: 1,
    max: 1,
  },
  UP_RIGHT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: -0.8,
    max: -0.7,
  },
  DOWN_LEFT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: 0.4,
    max: 0.5,
  },
  DOWN_RIGHT: {
    type: 'axis-as-button',
    pad: PAD_NAME,
    axis: 9,
    min: -0.2,
    max: -0.1,
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
    button: 2,
  },
  B: {
    type: 'button',
    pad: PAD_NAME,
    button: 1,
  },
  C: {
    type: 'button',
    pad: PAD_NAME,
    button: 3,
  },
  D: {
    type: 'button',
    pad: PAD_NAME,
    button: 0,
  },
};
