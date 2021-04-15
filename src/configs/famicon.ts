// tslint:disable: no-magic-numbers
import { Config } from '../interfaces';

export const config: Config = {
  version: 1,
  name: 'iBuffalo controller as Famicon',
  images: [
    {
      src: 'img/famicon/bg.png',
      notes: 'Base gamepad image',
      zIndex: 1,
    },
  ],
  widgets: [
    {
      type: 'button',
      name: 'Select',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 8,
      },
      images: {
        src: 'img/famicon/long.png',
        zIndex: 2,
        left: 92,
        top: 86,
      },
    },
    {
      type: 'button',
      name: 'Start Button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 9,
      },
      images: {
        src: 'img/famicon/long.png',
        zIndex: 2,
        left: 120,
        top: 86,
      },
    },
    {
      type: 'button',
      name: 'Up button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 12,
      },
      images: {
        src: 'img/famicon/up-down.png',
        zIndex: 2,
        left: 40,
        top: 46,
        width: 16,
        height: 28,
      },
    },
    {
      type: 'button',
      name: 'Down button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 13,
      },
      images: {
        src: 'img/famicon/up-down.png',
        zIndex: 2,
        left: 40,
        top: 74,
        width: 16,
        height: 28,
        offsetY: 28,
      },
    },
    {
      type: 'button',
      name: 'Left button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 14,
      },
      images: {
        src: 'img/famicon/left-right.png',
        zIndex: 2,
        left: 20,
        top: 66,
        width: 28,
        height: 16,
      },
    },
    {
      type: 'button',
      name: 'Right button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 15,
      },
      images: {
        src: 'img/famicon/left-right.png',
        zIndex: 2,
        left: 48,
        top: 66,
        width: 28,
        height: 16,
        offsetX: 28,
      },
    },
    {
      type: 'button',
      name: 'A button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 1,
      },
      images: {
        src: 'img/famicon/round.png',
        zIndex: 2,
        left: 196,
        top: 82,
      },
    },
    {
      type: 'button',
      name: 'B button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 0,
      },
      images: {
        src: 'img/famicon/round.png',
        zIndex: 2,
        left: 164,
        top: 82,
      },
    },
    {
      type: 'button',
      name: 'X button as A button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 3,
      },
      images: {
        src: 'img/famicon/round.png',
        zIndex: 2,
        left: 196,
        top: 82,
      },
    },
    {
      type: 'button',
      name: 'Y button as B button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 2,
      },
      images: {
        src: 'img/famicon/round.png',
        zIndex: 2,
        left: 164,
        top: 82,
      },
    },
  ],
};
