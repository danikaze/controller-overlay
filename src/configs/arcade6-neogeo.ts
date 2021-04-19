// tslint:disable: no-magic-numbers
import { Config } from '../interfaces';
import { IMG_ARCADE_BUTTON } from '../constants/arcade-img';
import { NEOGEO_MINI_BUTTON } from '../constants/neogeo-buttons';

type Buttons = 'SELECT' | 'START' | 'A' | 'B' | 'C' | 'D';

const STICK_POSITION = { left: 0, top: 0, zIndex: 2 };
const BUTTON_POSITION: {
  [button in Buttons]: Record<
    'DEFAULT' | 'PUSHED',
    Record<'left' | 'top', number>
  >;
} = {
  SELECT: {
    DEFAULT: { left: 215, top: 110 },
    PUSHED: { left: 215, top: 116 },
  },
  START: {
    DEFAULT: { left: 145, top: 110 },
    PUSHED: { left: 145, top: 116 },
  },
  A: {
    DEFAULT: { left: 250, top: 50 },
    PUSHED: { left: 250, top: 56 },
  },
  B: {
    DEFAULT: { left: 297, top: 90 },
    PUSHED: { left: 297, top: 96 },
  },
  C: {
    DEFAULT: { left: 317, top: 25 },
    PUSHED: { left: 317, top: 31 },
  },
  D: {
    DEFAULT: { left: 365, top: 65 },
    PUSHED: { left: 365, top: 71 },
  },
};

export const config: Config = {
  version: 1,
  name: 'Neo-Geo mini controller as 4+2 buttons Arcade stick',
  widgets: [
    {
      type: 'button',
      name: 'Select button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.SELECT,
      },
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.DEFAULT,
        ...BUTTON_POSITION.SELECT.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'Select button (pushed)',
      input: NEOGEO_MINI_BUTTON.SELECT,
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.PUSHED,
        ...BUTTON_POSITION.SELECT.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'Start Button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.START,
      },
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.DEFAULT,
        ...BUTTON_POSITION.START.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'Start Button (pushed)',
      input: NEOGEO_MINI_BUTTON.START,
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.PUSHED,
        ...BUTTON_POSITION.START.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'No direction button',
      input: {
        not: {
          or: [
            NEOGEO_MINI_BUTTON.UP,
            NEOGEO_MINI_BUTTON.DOWN,
            NEOGEO_MINI_BUTTON.LEFT,
            NEOGEO_MINI_BUTTON.RIGHT,
            NEOGEO_MINI_BUTTON.UP_LEFT,
            NEOGEO_MINI_BUTTON.UP_RIGHT,
            NEOGEO_MINI_BUTTON.DOWN_LEFT,
            NEOGEO_MINI_BUTTON.DOWN_RIGHT,
          ],
        },
      },
      images: {
        src: 'img/arcade/stick.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Up button',
      input: NEOGEO_MINI_BUTTON.UP,
      images: {
        src: 'img/arcade/stick-up.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down button',
      input: NEOGEO_MINI_BUTTON.DOWN,
      images: {
        src: 'img/arcade/stick-down.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Left button',
      input: NEOGEO_MINI_BUTTON.LEFT,
      images: {
        src: 'img/arcade/stick-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Right button',
      input: NEOGEO_MINI_BUTTON.RIGHT,
      images: {
        src: 'img/arcade/stick-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Up+Right button',
      input: NEOGEO_MINI_BUTTON.UP_RIGHT,

      images: {
        src: 'img/arcade/stick-up-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down+Right button',
      input: NEOGEO_MINI_BUTTON.DOWN_RIGHT,
      images: {
        src: 'img/arcade/stick-down-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Up+Left button',
      input: NEOGEO_MINI_BUTTON.UP_LEFT,
      images: {
        src: 'img/arcade/stick-up-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down+Left button',
      input: NEOGEO_MINI_BUTTON.DOWN_LEFT,
      images: {
        src: 'img/arcade/stick-down-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'A/red button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.A,
      },
      images: {
        ...IMG_ARCADE_BUTTON.RED.DEFAULT,
        ...BUTTON_POSITION.A.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'A/red button (pushed)',
      input: NEOGEO_MINI_BUTTON.A,
      images: {
        ...IMG_ARCADE_BUTTON.RED.PUSHED,
        ...BUTTON_POSITION.A.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'B/yellow button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.B,
      },
      images: {
        ...IMG_ARCADE_BUTTON.YELLOW.DEFAULT,
        ...BUTTON_POSITION.B.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'B/yellow button (pushed)',
      input: NEOGEO_MINI_BUTTON.B,
      images: {
        ...IMG_ARCADE_BUTTON.YELLOW.PUSHED,
        ...BUTTON_POSITION.B.PUSHED,
      },
    },

    {
      type: 'button',
      name: 'C/green button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.C,
      },
      images: {
        ...IMG_ARCADE_BUTTON.GREEN.DEFAULT,
        ...BUTTON_POSITION.C.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'C/green button (pushed)',
      input: NEOGEO_MINI_BUTTON.C,
      images: {
        ...IMG_ARCADE_BUTTON.GREEN.PUSHED,
        ...BUTTON_POSITION.C.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'D/blue button (default)',
      input: {
        not: NEOGEO_MINI_BUTTON.D,
      },
      images: {
        ...IMG_ARCADE_BUTTON.BLUE.DEFAULT,
        ...BUTTON_POSITION.D.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'D/blue button (pushed)',
      input: NEOGEO_MINI_BUTTON.D,
      images: {
        ...IMG_ARCADE_BUTTON.BLUE.PUSHED,
        ...BUTTON_POSITION.D.PUSHED,
      },
    },
  ],
};
