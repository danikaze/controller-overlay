// tslint:disable: no-magic-numbers
import { MEGADRIVE_BUTTON } from '@src/constants/megadrive6-buttons';
import { IMG_SUFAMI_BUTTON } from '@src/constants/sufami-img';
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'SEGA Mega Drive 6 button pad as Japanese Super Nintendo',
  images: [IMG_SUFAMI_BUTTON.BASE],
  widgets: [
    {
      type: 'button',
      name: 'Select button',
      input: MEGADRIVE_BUTTON.MODE,
      images: IMG_SUFAMI_BUTTON.SELECT,
    },
    {
      type: 'button',
      name: 'Start Button',
      input: MEGADRIVE_BUTTON.START,
      images: IMG_SUFAMI_BUTTON.START,
    },
    {
      type: 'button',
      name: 'Up button',
      input: MEGADRIVE_BUTTON.UP,
      images: IMG_SUFAMI_BUTTON.UP,
    },
    {
      type: 'button',
      name: 'Down button',
      input: MEGADRIVE_BUTTON.DOWN,
      images: IMG_SUFAMI_BUTTON.DOWN,
    },
    {
      type: 'button',
      name: 'Left button',
      input: MEGADRIVE_BUTTON.LEFT,
      images: IMG_SUFAMI_BUTTON.LEFT,
    },
    {
      type: 'button',
      name: 'Right button',
      input: MEGADRIVE_BUTTON.RIGHT,
      images: IMG_SUFAMI_BUTTON.RIGHT,
    },
    {
      type: 'button',
      name: 'A button',
      input: MEGADRIVE_BUTTON.B,
      images: IMG_SUFAMI_BUTTON.A,
    },
    {
      type: 'button',
      name: 'B button',
      input: MEGADRIVE_BUTTON.A,
      images: IMG_SUFAMI_BUTTON.B,
    },
    {
      type: 'button',
      name: 'X button',
      input: MEGADRIVE_BUTTON.Y,
      images: IMG_SUFAMI_BUTTON.X,
    },
    {
      type: 'button',
      name: 'Y button',
      input: MEGADRIVE_BUTTON.X,
      images: IMG_SUFAMI_BUTTON.Y,
    },
    {
      type: 'button',
      name: 'L button',
      input: MEGADRIVE_BUTTON.Z,
      images: IMG_SUFAMI_BUTTON.L,
    },
    {
      type: 'button',
      name: 'R button',
      input: MEGADRIVE_BUTTON.C,
      images: IMG_SUFAMI_BUTTON.R,
    },
  ],
};
