// tslint:disable: no-magic-numbers
import { Config } from '../constants';

export const config: Config = {
  version: 1,
  name: 'SEGA Mega Drive 6B as Famicon',
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
      name: 'Start Button',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
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
      name: 'Mode button (as Select button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
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
      name: 'Up button',
      input: {
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 1,
        min: -Infinity,
        max: -0.5,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 1,
        min: 0.5,
        max: Infinity,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 0,
        min: -Infinity,
        max: -0.5,
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
        type: 'axis-as-button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        axis: 0,
        min: 0.5,
        max: Infinity,
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
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 2,
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
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 1,
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
      name: 'C button (as A button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 5,
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
      name: 'X button (as Select button)',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 3,
      },
      images: {
        src: 'img/famicon/long.png',
        zIndex: 2,
        left: 92,
        top: 86,
      },
    },
  ],
};
