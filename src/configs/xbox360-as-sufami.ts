// tslint:disable: no-magic-numbers
import { IMG_SUFAMI_BUTTON } from '@src/constants/sufami-img';
import { XBOX360_BUTTON } from '@src/constants/xbox360-buttons';
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'Xbox 360 pad as Japanese Super Nintendo',
  images: [IMG_SUFAMI_BUTTON.BASE],
  widgets: [
    {
      type: 'button',
      name: 'Select button',
      input: XBOX360_BUTTON.BACK,
      images: IMG_SUFAMI_BUTTON.SELECT,
    },
    {
      type: 'button',
      name: 'Start Button',
      input: XBOX360_BUTTON.START,
      images: IMG_SUFAMI_BUTTON.START,
    },
    {
      type: 'button',
      name: 'Up button',
      input: XBOX360_BUTTON.UP,
      images: IMG_SUFAMI_BUTTON.UP,
    },
    {
      type: 'button',
      name: 'Down button',
      input: XBOX360_BUTTON.DOWN,
      images: IMG_SUFAMI_BUTTON.DOWN,
    },
    {
      type: 'button',
      name: 'Left button',
      input: XBOX360_BUTTON.LEFT,
      images: IMG_SUFAMI_BUTTON.LEFT,
    },
    {
      type: 'button',
      name: 'Right button',
      input: XBOX360_BUTTON.RIGHT,
      images: IMG_SUFAMI_BUTTON.RIGHT,
    },
    {
      type: 'button',
      name: 'A button',
      input: XBOX360_BUTTON.B,
      images: IMG_SUFAMI_BUTTON.A,
    },
    {
      type: 'button',
      name: 'B button',
      input: XBOX360_BUTTON.A,
      images: IMG_SUFAMI_BUTTON.B,
    },
    {
      type: 'button',
      name: 'X button',
      input: XBOX360_BUTTON.Y,
      images: IMG_SUFAMI_BUTTON.X,
    },
    {
      type: 'button',
      name: 'Y button',
      input: XBOX360_BUTTON.X,
      images: IMG_SUFAMI_BUTTON.Y,
    },
    {
      type: 'button',
      name: 'L button',
      input: XBOX360_BUTTON.LB,
      images: IMG_SUFAMI_BUTTON.L,
    },
    {
      type: 'button',
      name: 'R button',
      input: XBOX360_BUTTON.RB,
      images: IMG_SUFAMI_BUTTON.R,
    },
  ],
};
