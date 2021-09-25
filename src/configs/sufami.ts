// tslint:disable: no-magic-numbers
import { SNES_BUTTON } from '@src/constants/snes-buttons';
import { IMG_SUFAMI_BUTTON } from '@src/constants/sufami-img';
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'iBuffalo as Japanese Super Nintendo',
  images: [IMG_SUFAMI_BUTTON.BASE],
  widgets: [
    {
      type: 'button',
      name: 'Select button',
      input: SNES_BUTTON.SELECT,
      images: IMG_SUFAMI_BUTTON.SELECT,
    },
    {
      type: 'button',
      name: 'Start Button',
      input: SNES_BUTTON.START,
      images: IMG_SUFAMI_BUTTON.START,
    },
    {
      type: 'button',
      name: 'Up button',
      input: SNES_BUTTON.UP,
      images: IMG_SUFAMI_BUTTON.UP,
    },
    {
      type: 'button',
      name: 'Down button',
      input: SNES_BUTTON.DOWN,
      images: IMG_SUFAMI_BUTTON.DOWN,
    },
    {
      type: 'button',
      name: 'Left button',
      input: SNES_BUTTON.LEFT,
      images: IMG_SUFAMI_BUTTON.LEFT,
    },
    {
      type: 'button',
      name: 'Right button',
      input: SNES_BUTTON.RIGHT,
      images: IMG_SUFAMI_BUTTON.RIGHT,
    },
    {
      type: 'button',
      name: 'A button',
      input: SNES_BUTTON.A,
      images: IMG_SUFAMI_BUTTON.A,
    },
    {
      type: 'button',
      name: 'B button',
      input: SNES_BUTTON.B,
      images: IMG_SUFAMI_BUTTON.B,
    },
    {
      type: 'button',
      name: 'X button',
      input: SNES_BUTTON.X,
      images: IMG_SUFAMI_BUTTON.X,
    },
    {
      type: 'button',
      name: 'Y button',
      input: SNES_BUTTON.Y,
      images: IMG_SUFAMI_BUTTON.Y,
    },
    {
      type: 'button',
      name: 'L button',
      input: SNES_BUTTON.L,
      images: IMG_SUFAMI_BUTTON.L,
    },
    {
      type: 'button',
      name: 'R button',
      input: SNES_BUTTON.R,
      images: IMG_SUFAMI_BUTTON.R,
    },
  ],
};
