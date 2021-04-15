// tslint:disable: no-magic-numbers
import { Config } from '@src/interfaces';

export const config: Config = {
  version: 1,
  style: 'sws',
  name: 'Logitech X-56 for Star Wars Squadrons',
  widgets: [
    {
      type: 'group',
      name: 'Hardpoints',
      styles: {
        widget: {
          top: '0px',
          left: '15px',
        },
      },
      children: [
        {
          type: 'button',
          name: 'Left aux',
          labels: {
            center: 'LEFT',
          },
          styles: {
            widget: {
              top: '0px',
              left: '0px',
              width: '45px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 3,
          },
        },
        {
          type: 'button',
          name: 'Main fire',
          labels: {
            center: 'FIRE',
          },
          styles: {
            widget: {
              top: '0px',
              left: '50px',
              width: '70px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
            button: 0,
          },
        },
        {
          type: 'button',
          name: 'Right aux',
          labels: {
            center: 'RIGHT',
          },
          styles: {
            widget: {
              top: '0px',
              left: '125px',
              width: '45px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 4,
          },
        },
        {
          type: 'button',
          name: 'Countermeasures',
          labels: {
            center: 'COUNTER',
          },
          styles: {
            widget: {
              top: '40px',
              left: '90px',
              width: '80px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
            button: 2,
          },
        },
        {
          type: 'button',
          name: 'Boost/Drift',
          labels: {
            center: 'BOOST/RIFT',
          },
          styles: {
            widget: {
              top: '40px',
              left: '0px',
              width: '80px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 0,
          },
        },
      ],
    },
    {
      name: 'Ship control',
      type: 'group',
      styles: {
        widget: {
          top: '80px',
          left: '0px',
        },
      },
      children: [
        {
          type: 'axis',
          name: 'Throttle',
          labels: {
            left: 'THROTTLE',
          },
          styles: {
            widget: {
              top: '45px',
              left: '15px',
              width: '50px',
            },
            position: {
              width: '40px',
              height: '5px',
              borderRadius: '1px',
            },
          },
          gridlines: [25, 50, 75],
          input: {
            y: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
              axis: 1,
              inverted: true,
            },
          },
        },
        {
          type: 'axis',
          name: 'Yaw',
          labels: {
            top: 'YAW',
          },
          styles: {
            widget: {
              top: '15px',
              left: '75px',
            },
          },
          gridlines: [50],
          input: {
            x: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
              axis: 5,
            },
          },
        },
        {
          type: 'axis',
          name: 'Stick',
          labels: {
            bottom: 'PITCH',
            right: 'ROLL',
          },
          styles: {
            widget: {
              top: '45px',
              left: '75px',
            },
          },
          gridlines: [50],
          input: {
            x: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
              axis: 0,
            },
            y: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
              axis: 1,
            },
          },
        },
      ],
    },
  ],
};
