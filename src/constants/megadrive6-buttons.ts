// tslint:disable: no-magic-numbers
import { InputAxisAsButton, InputButton } from '@src/interfaces';

const PAD_NAME = '6B controller (Vendor: 0ca3 Product: 0024)';

type Button =
  | 'UP'
  | 'DOWN'
  | 'LEFT'
  | 'RIGHT'
  | 'MODE'
  | 'START'
  | 'A'
  | 'B'
  | 'C'
  | 'X'
  | 'Y'
  | 'Z';

export const MEGADRIVE_BUTTON: {
  [button in Button]: InputAxisAsButton | InputButton;
} = {
  UP: {
    pad: PAD_NAME,
    type: 'axis-as-button',
    axis: 1,
    min: -Infinity,
    max: -0.5,
  },
  DOWN: {
    pad: PAD_NAME,
    type: 'axis-as-button',
    axis: 1,
    min: 0.5,
    max: Infinity,
  },
  LEFT: {
    pad: PAD_NAME,
    type: 'axis-as-button',
    axis: 0,
    min: -Infinity,
    max: -0.5,
  },
  RIGHT: {
    pad: PAD_NAME,
    type: 'axis-as-button',
    axis: 0,
    min: 0.5,
    max: Infinity,
  },
  MODE: {
    pad: PAD_NAME,
    type: 'button',
    button: 8,
  },
  START: {
    type: 'button',
    pad: PAD_NAME,
    button: 9,
  },
  A: {
    pad: PAD_NAME,
    type: 'button',
    button: 2,
  },
  B: {
    pad: PAD_NAME,
    type: 'button',
    button: 1,
  },
  C: {
    pad: PAD_NAME,
    type: 'button',
    button: 5,
  },
  X: {
    pad: PAD_NAME,
    type: 'button',
    button: 3,
  },
  Y: {
    pad: PAD_NAME,
    type: 'button',
    button: 0,
  },
  Z: {
    pad: PAD_NAME,
    type: 'button',
    button: 4,
  },
};
