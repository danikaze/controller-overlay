import { PadDefinitions, PadMapping } from './constants';

/*
 * This is the list of pads we want to detect as
 * [Pad name]: [ID String]
 */
export const mappings: PadMapping = {
  SaitekX56Throttle: /X-56 Rhino Throttle/i,
  SaitekX56Joystick: /X-56 Rhino Stick/i,
};

/*
 * This is the list of definitions per pad name
 * (from the ones to detect in `mappings`)
 */
export const definitions: PadDefinitions = {
  SaitekX56Throttle: {
    buttons: [
      {
        button: 0,
        type: 'BUTTON',
        id: 'boost',
      },
      {
        button: 2,
        type: 'BUTTON',
        id: 'ecm',
      },
      {
        button: 1,
        type: 'BUTTON',
        id: 'shield-charge-boost',
      },
    ],
    axes: [
      {
        axis: 1,
        type: 'AXIS_Y',
        id: 'throttle',
        range: [-1, 1],
      },
      {
        axis: 3,
        type: 'AXIS_X',
        id: 'thrusters',
        range: [-1, 1],
      },
      {
        axis: 4,
        type: 'AXIS_Y',
        id: 'thrusters',
        range: [1, -1],
      },
    ],
  },
  SaitekX56Joystick: {
    buttons: [
      {
        button: 2,
        type: 'BUTTON',
        id: 'chaff',
      },
      {
        button: 4,
        type: 'BUTTON',
        id: 'heat-sink',
      },
      {
        button: 5,
        type: 'BUTTON',
        id: 'flight-assist',
      },
      {
        id: 'thrust',
        type: 'BUTTON_AXIS_Y',
        buttonMax: 6,
        buttonMin: 8,
        range: [-1, 1],
      },
    ],
    axes: [
      {
        axis: 0,
        type: 'AXIS_X',
        id: 'stick',
        range: [-1, 1],
      },
      {
        axis: 1,
        type: 'AXIS_Y',
        id: 'stick',
        range: [1, -1],
      },
      {
        axis: 5,
        type: 'AXIS_X',
        id: 'yaw',
        range: [-1, 1],
      },
    ],
  },
};
