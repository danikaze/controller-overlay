// tslint:disable: no-magic-numbers
import { Config } from '../constants';

export const config: Config = {
  version: 1,
  name: 'SEGA Mega Drive 6B as NES',
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
      name: 'Start Button',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
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
      name: 'Mode button (as Select button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
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
      name: 'Up button',
      input: {
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 1,
        min: -Infinity,
        max: -0.5,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 1,
        min: 0.5,
        max: Infinity,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 0,
        min: -Infinity,
        max: -0.5,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 0,
        min: 0.5,
        max: Infinity,
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
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 2,
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
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 1,
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
      name: 'C button (as A button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 5,
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
      name: 'X button (as Select button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 3,
      },
      images: {
        src: 'img/nes/long.png',
        zIndex: 2,
        left: 88,
        top: 76,
      },
    },
  ],
};
