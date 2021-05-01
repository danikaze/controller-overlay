// tslint:disable: no-magic-numbers
import { XBOX360_AXIS, XBOX360_BUTTON } from '@src/constants/xbox360-buttons';
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'Xbox 360 pad',
  images: [
    {
      src: 'img/xbox360/bg.png',
      notes: 'Base gamepad image',
      zIndex: 1,
    },
  ],
  widgets: [
    {
      type: 'button',
      name: 'Start Button',
      input: XBOX360_BUTTON.START,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 144,
        top: 72,
        width: 15,
        height: 15,
        offsetX: 144,
        offsetY: 72,
      },
    },
    {
      type: 'button',
      name: 'Back Button',
      input: XBOX360_BUTTON.BACK,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 111,
        top: 72,
        width: 15,
        height: 15,
        offsetX: 111,
        offsetY: 72,
      },
    },
    {
      type: 'button',
      name: 'Up button',
      input: XBOX360_BUTTON.UP,
      images: {
        src: 'img/xbox360/up-down.png',
        zIndex: 2,
        left: 93,
        top: 99,
        width: 18,
        height: 24,
      },
    },
    {
      type: 'button',
      name: 'Down button',
      input: XBOX360_BUTTON.DOWN,
      images: {
        src: 'img/xbox360/up-down.png',
        zIndex: 2,
        left: 93,
        top: 123,
        width: 18,
        height: 24,
        offsetY: 24,
      },
    },
    {
      type: 'button',
      name: 'Left button',
      input: XBOX360_BUTTON.LEFT,
      images: {
        src: 'img/xbox360/left-right.png',
        zIndex: 2,
        left: 78,
        top: 114,
        width: 24,
        height: 18,
      },
    },
    {
      type: 'button',
      name: 'Right button',
      input: XBOX360_BUTTON.RIGHT,
      images: {
        src: 'img/xbox360/left-right.png',
        zIndex: 2,
        left: 102,
        top: 114,
        width: 24,
        height: 18,
        offsetX: 24,
      },
    },
    {
      type: 'button',
      name: 'A button',
      input: XBOX360_BUTTON.A,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 195,
        top: 84,
        width: 21,
        height: 21,
        offsetX: 195,
        offsetY: 84,
      },
    },
    {
      type: 'button',
      name: 'B button',
      input: XBOX360_BUTTON.B,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 213,
        top: 66,
        width: 21,
        height: 21,
        offsetX: 213,
        offsetY: 66,
      },
    },
    {
      type: 'button',
      name: 'X button',
      input: XBOX360_BUTTON.X,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 177,
        top: 66,
        width: 21,
        height: 21,
        offsetX: 177,
        offsetY: 66,
      },
    },
    {
      type: 'button',
      name: 'Y button',
      input: XBOX360_BUTTON.Y,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 195,
        top: 48,
        width: 21,
        height: 21,
        offsetX: 195,
        offsetY: 48,
      },
    },
    {
      type: 'button',
      name: 'Left Button',
      input: XBOX360_BUTTON.LB,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 45,
        top: 30,
        width: 39,
        height: 12,
        offsetX: 45,
        offsetY: 30,
      },
    },
    {
      type: 'button',
      name: 'Right Button',
      input: XBOX360_BUTTON.RB,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 186,
        top: 30,
        width: 39,
        height: 12,
        offsetX: 186,
        offsetY: 30,
      },
    },
    {
      type: 'button',
      name: 'Left Trigger',
      input: XBOX360_BUTTON.LT,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 63,
        width: 12,
        height: 21,
        offsetX: 63,
      },
    },
    {
      type: 'button',
      name: 'Right Trigger',
      input: XBOX360_BUTTON.RT,
      images: {
        src: 'img/xbox360/pressed.png',
        zIndex: 2,
        left: 195,
        width: 12,
        height: 21,
        offsetX: 195,
      },
    },
    {
      type: 'axis-image',
      name: 'Left Stick',
      styles: {
        widget: {
          top: '42px',
          left: '30px',
        },
      },
      input: {
        x: XBOX360_AXIS.LSX,
        y: XBOX360_AXIS.LSY,
      },
      images: [
        {
          radiusX: 12,
          radiusY: 12,
          src: 'img/xbox360/stick.png',
          zIndex: 3,
        },
      ],
    },
    {
      type: 'axis-image',
      name: 'Left Stick Shadow',
      styles: {
        widget: {
          top: '48px',
          left: '36px',
        },
      },
      input: {
        x: XBOX360_AXIS.LSX,
        y: XBOX360_AXIS.LSY,
      },
      images: [
        {
          radiusX: 6,
          radiusY: 6,
          src: 'img/xbox360/stick-shadow.png',
          zIndex: 2,
        },
      ],
    },
    {
      type: 'axis-image',
      name: 'Right Stick',
      styles: {
        widget: {
          top: '88px',
          left: '133px',
        },
      },
      input: {
        x: XBOX360_AXIS.RSX,
        y: XBOX360_AXIS.RSY,
      },
      images: [
        {
          radiusX: 12,
          radiusY: 12,
          src: 'img/xbox360/stick.png',
          zIndex: 3,
        },
      ],
    },
    {
      type: 'axis-image',
      name: 'Right Stick Shadow',
      styles: {
        widget: {
          top: '94px',
          left: '139px',
        },
      },
      input: {
        x: XBOX360_AXIS.RSX,
        y: XBOX360_AXIS.RSY,
      },
      images: [
        {
          radiusX: 6,
          radiusY: 6,
          src: 'img/xbox360/stick-shadow.png',
          zIndex: 2,
        },
      ],
    },
  ],
};
