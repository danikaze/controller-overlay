// tslint:disable: no-magic-numbers
import { Config } from '../interfaces';

export const config: Config = {
  version: 1,
  name: 'SEGA Mega Drive 6B as Master System (red variation)',
  images: [
    {
      src: 'img/mastersystem/bg.png',
      notes: 'Base gamepad image',
      zIndex: 1,
    },
  ],
  widgets: [
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
        src: 'img/mastersystem/up-down-red.png',
        zIndex: 2,
        left: 36,
        top: 36,
        height: 32,
        width: 52,
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
        src: 'img/mastersystem/up-down-red.png',
        zIndex: 2,
        left: 36,
        top: 64,
        height: 32,
        width: 52,
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
        src: 'img/mastersystem/left-right-red.png',
        zIndex: 2,
        left: 32,
        top: 40,
        height: 52,
        width: 32,
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
        src: 'img/mastersystem/left-right-red.png',
        zIndex: 2,
        left: 60,
        top: 40,
        height: 52,
        width: 32,
        offsetX: 28,
      },
    },
    {
      type: 'button',
      name: 'A button as Button 1',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 2,
      },
      images: {
        src: 'img/mastersystem/button-red.png',
        zIndex: 2,
        left: 148,
        top: 64,
      },
    },
    {
      type: 'button',
      name: 'B button as Button 2',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 1,
      },
      images: {
        src: 'img/mastersystem/button-red.png',
        zIndex: 2,
        left: 188,
        top: 64,
      },
    },
  ],
};
