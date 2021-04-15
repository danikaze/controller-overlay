// tslint:disable: no-magic-numbers
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'iBuffalo controller as NES',
  images: [
    {
      src: 'img/nes/bg.png',
      notes: 'Base gamepad image',
      zIndex: 1,
    },
  ],
  widgets: [
    {
      type: 'button',
      name: 'Select button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 8,
      },
      images: {
        src: 'img/nes/long.png',
        zIndex: 2,
        left: 88,
        top: 76,
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
        src: 'img/nes/long.png',
        zIndex: 2,
        left: 116,
        top: 76,
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
        src: 'img/nes/up.png',
        zIndex: 2,
        left: 36,
        top: 44,
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
        src: 'img/nes/down.png',
        zIndex: 2,
        left: 36,
        top: 72,
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
        src: 'img/nes/left.png',
        zIndex: 2,
        left: 16,
        top: 64,
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
        src: 'img/nes/right.png',
        zIndex: 2,
        left: 44,
        top: 64,
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
        src: 'img/nes/round.png',
        zIndex: 2,
        left: 196,
        top: 72,
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
        src: 'img/nes/round.png',
        zIndex: 2,
        left: 164,
        top: 72,
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
        src: 'img/nes/round.png',
        zIndex: 2,
        left: 196,
        top: 72,
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
        src: 'img/nes/round.png',
        zIndex: 2,
        left: 164,
        top: 72,
      },
    },
  ],
};
