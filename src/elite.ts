// tslint:disable: no-magic-numbers
import { Config } from './constants';

export const config: Config = {
  version: 1,
  name: 'Logitech X-56 for  Elite Dangerous',
  widgets: [
    {
      type: 'group',
      name: 'Buttons',
      styles: {
        widget: {
          top: '0px',
          left: '200px',
        },
      },
      children: [
        {
          type: 'button',
          name: 'Boost',
          labels: {
            center: 'BOOST',
          },
          styles: {
            widget: {
              top: '0px',
              left: '0px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 0,
          },
        },
        {
          type: 'button',
          name: 'Chaff',
          labels: {
            center: 'CHAFF',
          },
          styles: {
            widget: {
              top: '0px',
              left: '60px',
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
          name: 'ECM',
          labels: {
            center: 'ECM',
          },
          styles: {
            widget: {
              top: '40px',
              left: '0px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 2,
          },
        },
        {
          type: 'button',
          name: 'Shield Charge Boost',
          labels: {
            center: 'SHIELD BOOST',
          },
          styles: {
            widget: {
              top: '40px',
              left: '60px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
            button: 1,
          },
        },
        {
          type: 'button',
          name: 'Heat Sink',
          labels: {
            center: 'HEAT SINK',
          },
          styles: {
            widget: {
              top: '80px',
              left: '0px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
            button: 4,
          },
        },
        {
          type: 'button',
          name: 'flight-assist',
          labels: {
            center: 'FA Off',
          },
          styles: {
            widget: {
              top: '80px',
              left: '60px',
            },
          },
          input: {
            type: 'button',
            pad:
              'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
            button: 5,
          },
        },
      ],
    },
    {
      name: 'Thrusters and Throttle',
      type: 'group',
      styles: {
        widget: {
          top: '0px',
          left: '0px',
        },
      },
      children: [
        {
          type: 'axis',
          name: 'Throttle',
          labels: {
            right: 'THROTTLE',
          },
          styles: {
            widget: {
              top: '0px',
              left: '0px',
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
          name: 'Thrusters',
          labels: {
            top: 'LATERAL',
            right: 'VERTICAL',
          },
          styles: {
            widget: {
              top: '190px',
              left: '0px',
            },
          },
          gridlines: [50],
          input: {
            x: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
              axis: 3,
            },
            y: {
              type: 'axis',
              pad:
                'Saitek Pro Flight X-56 Rhino Throttle (Vendor: 0738 Product: a221)',
              axis: 4,
            },
          },
        },
        {
          type: 'axis',
          name: 'Thrust',
          labels: {
            right: 'THRUST',
          },
          styles: {
            widget: {
              top: '0px',
              left: '90px',
            },
          },
          gridlines: [50],
          input: {
            y: {
              type: 'button-as-axis',
              min: {
                type: 'button',
                pad:
                  'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
                button: 8,
              },
              max: {
                type: 'button',
                pad:
                  'Saitek Pro Flight X-56 Rhino Stick (Vendor: 0738 Product: 2221)',
                button: 6,
              },
            },
          },
        },
      ],
    },
    {
      name: 'Direction',
      type: 'group',
      styles: {
        widget: {
          top: '140px',
          left: '200px',
        },
      },
      children: [
        {
          type: 'axis',
          name: 'Yaw',
          labels: {
            top: 'YAW',
          },
          styles: {
            widget: {
              top: '0px',
              left: '0px',
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
            top: 'PITCH',
            left: 'ROLL',
          },
          styles: {
            widget: {
              top: '50px',
              left: '0px',
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
