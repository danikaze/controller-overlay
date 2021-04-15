// tslint:disable: no-magic-numbers
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  name: 'SEGA Mega Drive 3 button pad',
  images: [
    {
      src: 'img/megadrive3/bg.png',
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
        src: 'img/megadrive3/start.png',
        zIndex: 2,
        left: 156,
        top: 16,
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
        src: 'img/megadrive3/up.png',
        zIndex: 2,
        left: 48,
        top: 29,
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
        src: 'img/megadrive3/down.png',
        zIndex: 2,
        left: 48,
        top: 56,
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
        src: 'img/megadrive3/left.png',
        zIndex: 2,
        left: 29,
        top: 49,
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
        src: 'img/megadrive3/right.png',
        zIndex: 2,
        left: 56,
        top: 48,
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
        src: 'img/megadrive3/a.png',
        zIndex: 2,
        left: 148,
        top: 56,
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
        src: 'img/megadrive3/b.png',
        zIndex: 2,
        left: 172,
        top: 44,
      },
    },
    {
      type: 'button',
      name: 'C button',
      input: {
        type: 'button',
        pad: '6B controller (Vendor: 0ca3 Product: 0024)',
        button: 5,
      },
      images: {
        src: 'img/megadrive3/c.png',
        zIndex: 2,
        left: 196,
        top: 36,
      },
    },
  ],
};
