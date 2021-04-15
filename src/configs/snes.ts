// tslint:disable: no-magic-numbers
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'iBuffalo as American Super Nintendo',
  images: [
    {
      src: 'img/snes/bg.png',
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
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 96,
        top: 72,
        width: 20,
        height: 20,
        offsetX: 96,
        offsetY: 72,
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
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 120,
        top: 72,
        width: 20,
        height: 20,
        offsetX: 120,
        offsetY: 72,
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
        src: 'img/snes/up-down.png',
        zIndex: 2,
        left: 44,
        top: 48,
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
        src: 'img/snes/up-down.png',
        zIndex: 2,
        left: 44,
        top: 76,
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
        src: 'img/snes/left-right.png',
        zIndex: 2,
        left: 24,
        top: 68,
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
        src: 'img/snes/left-right.png',
        zIndex: 2,
        left: 52,
        top: 68,
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
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 200,
        top: 68,
        width: 20,
        height: 20,
        offsetX: 200,
        offsetY: 68,
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
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 180,
        top: 88,
        width: 20,
        height: 20,
        offsetX: 180,
        offsetY: 88,
      },
    },
    {
      type: 'button',
      name: 'X button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 3,
      },
      images: {
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 180,
        top: 48,
        width: 20,
        height: 20,
        offsetX: 180,
        offsetY: 48,
      },
    },
    {
      type: 'button',
      name: 'Y button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 2,
      },
      images: {
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 160,
        top: 68,
        width: 20,
        height: 20,
        offsetX: 160,
        offsetY: 68,
      },
    },
    {
      type: 'button',
      name: 'L button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 4,
      },
      images: {
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 28,
        top: 12,
        width: 60,
        height: 16,
        offsetX: 28,
        offsetY: 12,
      },
    },
    {
      type: 'button',
      name: 'R button',
      input: {
        type: 'button',
        pad:
          'USB,2-axis 8-button gamepad   (STANDARD GAMEPAD Vendor: 0583 Product: 2060)',
        button: 5,
      },
      images: {
        src: 'img/snes/pressed.png',
        zIndex: 2,
        left: 152,
        top: 12,
        width: 60,
        height: 16,
        offsetX: 152,
        offsetY: 12,
      },
    },
  ],
};
