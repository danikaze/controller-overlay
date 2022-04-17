import { IMG_GBA_BUTTON } from '@src/constants/gba-img';
import { key } from '@src/constants/keys';
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'Game Boy Advance',
  images: [IMG_GBA_BUTTON.BASE],
  widgets: [
    {
      type: 'button',
      name: 'Up',
      input: key('ArrowUp'),
      images: IMG_GBA_BUTTON.UP,
    },
    {
      type: 'button',
      name: 'Down',
      input: key('ArrowDown'),
      images: IMG_GBA_BUTTON.DOWN,
    },
    {
      type: 'button',
      name: 'Left',
      input: key('ArrowLeft'),
      images: IMG_GBA_BUTTON.LEFT,
    },
    {
      type: 'button',
      name: 'Right',
      input: key('ArrowRight'),
      images: IMG_GBA_BUTTON.RIGHT,
    },
    {
      type: 'button',
      name: 'A Button',
      input: key('KeyX'),
      images: IMG_GBA_BUTTON.A,
    },
    {
      type: 'button',
      name: 'B Button',
      input: key('KeyZ'),
      images: IMG_GBA_BUTTON.B,
    },
    {
      type: 'button',
      name: 'L Button',
      input: key('KeyA'),
      images: IMG_GBA_BUTTON.L,
    },
    {
      type: 'button',
      name: 'R Button',
      input: key('KeyS'),
      images: IMG_GBA_BUTTON.R,
    },
    {
      type: 'button',
      name: 'Select Button',
      input: key('Backspace'),
      images: IMG_GBA_BUTTON.SELECT,
    },
    {
      type: 'button',
      name: 'Start Button',
      input: key('Space'),
      images: IMG_GBA_BUTTON.START,
    },
  ],
};
