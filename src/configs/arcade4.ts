// tslint:disable: no-magic-numbers
import { Config } from '../interfaces';
import { IMG_ARCADE_BUTTON } from '../constants/arcade-img';
import { SNES_BUTTON } from '../constants/snes-buttons';

type Buttons = 'SELECT' | 'START' | 'L' | 'R' | 'A' | 'B' | 'X' | 'Y';

const STICK_POSITION = { left: 0, top: 0, zIndex: 2 };
const BUTTON_POSITION: {
  [button in Buttons]: Record<
    'DEFAULT' | 'PUSHED',
    Record<'left' | 'top', number>
  >;
} = {
  SELECT: {
    DEFAULT: { left: 395, top: 35 },
    PUSHED: { left: 395, top: 41 },
  },
  START: {
    DEFAULT: { left: 395, top: 85 },
    PUSHED: { left: 395, top: 91 },
  },
  L: {
    DEFAULT: { left: 325, top: 35 },
    PUSHED: { left: 325, top: 41 },
  },
  R: {
    DEFAULT: { left: 325, top: 85 },
    PUSHED: { left: 325, top: 91 },
  },
  A: {
    DEFAULT: { left: 255, top: 85 },
    PUSHED: { left: 255, top: 91 },
  },
  B: {
    DEFAULT: { left: 190, top: 110 },
    PUSHED: { left: 190, top: 116 },
  },
  X: {
    DEFAULT: { left: 255, top: 35 },
    PUSHED: { left: 255, top: 41 },
  },
  Y: {
    DEFAULT: { left: 190, top: 60 },
    PUSHED: { left: 190, top: 66 },
  },
};

export const config: Config = {
  version: 1,
  name: 'iBuffalo controller as 4+4 buttons Arcade stick',
  widgets: [
    {
      type: 'button',
      name: 'Select button (default)',
      input: {
        not: SNES_BUTTON.SELECT,
      },
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.DEFAULT,
        ...BUTTON_POSITION.SELECT.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'Select button (pushed)',
      input: SNES_BUTTON.SELECT,
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.PUSHED,
        ...BUTTON_POSITION.SELECT.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'Start Button (default)',
      input: {
        not: SNES_BUTTON.START,
      },
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.DEFAULT,
        ...BUTTON_POSITION.START.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'Start Button (pushed)',
      input: SNES_BUTTON.START,
      images: {
        ...IMG_ARCADE_BUTTON.LIGHT_GREY.PUSHED,
        ...BUTTON_POSITION.START.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'No direction button',
      input: {
        not: {
          or: [
            SNES_BUTTON.UP,
            SNES_BUTTON.DOWN,
            SNES_BUTTON.LEFT,
            SNES_BUTTON.RIGHT,
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
      input: {
        and: [
          SNES_BUTTON.UP,
          {
            not: {
              or: [SNES_BUTTON.DOWN, SNES_BUTTON.LEFT, SNES_BUTTON.RIGHT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-up.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down button',
      input: {
        and: [
          SNES_BUTTON.DOWN,
          {
            not: {
              or: [SNES_BUTTON.UP, SNES_BUTTON.LEFT, SNES_BUTTON.RIGHT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-down.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Left button',
      input: {
        and: [
          SNES_BUTTON.LEFT,
          {
            not: {
              or: [SNES_BUTTON.UP, SNES_BUTTON.DOWN, SNES_BUTTON.RIGHT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Right button',
      input: {
        and: [
          SNES_BUTTON.RIGHT,
          {
            not: {
              or: [SNES_BUTTON.UP, SNES_BUTTON.DOWN, SNES_BUTTON.LEFT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Up+Right button',
      input: {
        and: [
          SNES_BUTTON.UP,
          SNES_BUTTON.RIGHT,
          {
            not: {
              or: [SNES_BUTTON.DOWN, SNES_BUTTON.LEFT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-up-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down+Right button',
      input: {
        and: [
          SNES_BUTTON.DOWN,
          SNES_BUTTON.RIGHT,
          {
            not: {
              or: [SNES_BUTTON.UP, SNES_BUTTON.LEFT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-down-right.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Up+Left button',
      input: {
        and: [
          SNES_BUTTON.UP,
          SNES_BUTTON.LEFT,
          {
            not: {
              or: [SNES_BUTTON.DOWN, SNES_BUTTON.RIGHT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-up-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'Down+Left button',
      input: {
        and: [
          SNES_BUTTON.DOWN,
          SNES_BUTTON.LEFT,
          {
            not: {
              or: [SNES_BUTTON.UP, SNES_BUTTON.RIGHT],
            },
          },
        ],
      },
      images: {
        src: 'img/arcade/stick-down-left.png',
        ...STICK_POSITION,
      },
    },
    {
      type: 'button',
      name: 'A button as Red button (default)',
      input: {
        not: SNES_BUTTON.A,
      },
      images: {
        ...IMG_ARCADE_BUTTON.RED.DEFAULT,
        ...BUTTON_POSITION.A.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'A button as Red button (pushed)',
      input: SNES_BUTTON.A,
      images: {
        ...IMG_ARCADE_BUTTON.RED.PUSHED,
        ...BUTTON_POSITION.A.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'B button as Yellow button (default)',
      input: {
        not: SNES_BUTTON.B,
      },
      images: {
        ...IMG_ARCADE_BUTTON.YELLOW.DEFAULT,
        ...BUTTON_POSITION.B.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'B button as Yellow button (pushed)',
      input: SNES_BUTTON.B,
      images: {
        ...IMG_ARCADE_BUTTON.YELLOW.PUSHED,
        ...BUTTON_POSITION.B.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'X button as Blue button (default)',
      input: {
        not: SNES_BUTTON.X,
      },
      images: {
        ...IMG_ARCADE_BUTTON.BLUE.DEFAULT,
        ...BUTTON_POSITION.X.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'X button as Blue button (pushed)',
      input: SNES_BUTTON.X,
      images: {
        ...IMG_ARCADE_BUTTON.BLUE.PUSHED,
        ...BUTTON_POSITION.X.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'Y button as Green button (default)',
      input: {
        not: SNES_BUTTON.Y,
      },
      images: {
        ...IMG_ARCADE_BUTTON.GREEN.DEFAULT,
        ...BUTTON_POSITION.Y.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'Y button as Green button (pushed)',
      input: SNES_BUTTON.Y,
      images: {
        ...IMG_ARCADE_BUTTON.GREEN.PUSHED,
        ...BUTTON_POSITION.Y.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'L button (default)',
      input: {
        not: SNES_BUTTON.L,
      },
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.DEFAULT,
        ...BUTTON_POSITION.L.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'L button (pushed)',
      input: SNES_BUTTON.L,
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.PUSHED,
        ...BUTTON_POSITION.L.PUSHED,
      },
    },
    {
      type: 'button',
      name: 'R button (default)',
      input: {
        not: SNES_BUTTON.R,
      },
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.DEFAULT,
        ...BUTTON_POSITION.R.DEFAULT,
      },
    },
    {
      type: 'button',
      name: 'R button (pushed)',
      input: SNES_BUTTON.R,
      images: {
        ...IMG_ARCADE_BUTTON.DARK_GREY.PUSHED,
        ...BUTTON_POSITION.R.PUSHED,
      },
    },
  ],
};
