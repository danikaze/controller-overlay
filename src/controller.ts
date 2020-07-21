import { definitions } from './controller-definitions';
import { UPDATE_FPS, AXIS_Y_SIZE } from './constants';

export function initControllers() {
  window.addEventListener(
    'gamepadconnected',
    mapGamepad as EventListener,
    false
  );
}

const gamepadMapping: Partial<{
  [pad: string]: { index: number; timestamp: number };
}> = {};
let pollHandler: number | undefined;

function mapOneGamepad(type: string, gamepad: Gamepad): void {
  // tslint:disable: no-console
  console.log(`Mapped gamepad: ${gamepad.id}`);
  if (!definitions[type]) return;

  gamepadMapping[type] = {
    index: gamepad.index,
    timestamp: gamepad.timestamp,
  };
}

function mapGamepad(e: GamepadEvent): void {
  if (/X-56 Rhino Stick/i.test(e.gamepad.id)) {
    mapOneGamepad('SaitekX56Joystick', e.gamepad);
    startPoll();
  } else if (/X-56 Rhino Throttle/i.test(e.gamepad.id)) {
    mapOneGamepad('SaitekX56Throttle', e.gamepad);
    startPoll();
  }
}

function startPoll() {
  if (pollHandler) return;
  setInterval(poll, 1000 / UPDATE_FPS);
}

function stopPoll() {
  clearInterval(pollHandler);
  pollHandler = undefined;
}

function poll() {
  Object.entries(gamepadMapping).forEach(([type, data]) => {
    const gamepad = navigator.getGamepads()[data!.index];
    if (!gamepad || data!.timestamp === gamepad.timestamp) return;
    updateChanges(type, gamepad);
  });
}

function updateChanges(type: string, gamepad: Gamepad): void {
  const def = definitions[type];
  if (!def) return;

  def.buttons?.forEach((def) => {
    // tslint:disable: early-exit
    if (def.type === 'BUTTON') {
      updateButton(def.id, gamepad.buttons[def.button].pressed);
      return;
    }

    if (def.type === 'BUTTON_AXIS_X') {
      const axisMin = def.range[0];
      const axisMax = def.range[1];

      updateAxisX(
        def.id,
        gamepad.buttons[def.buttonMax].pressed
          ? axisMax
          : gamepad.buttons[def.buttonMin].pressed
          ? axisMin
          : (axisMin + axisMax) / 2,
        axisMin,
        axisMax
      );
      return;
    }

    if (def.type === 'BUTTON_AXIS_Y') {
      const axisMin = def.range[0];
      const axisMax = def.range[1];

      updateAxisY(
        def.id,
        gamepad.buttons[def.buttonMax].pressed
          ? axisMax
          : gamepad.buttons[def.buttonMin].pressed
          ? axisMin
          : (axisMin + axisMax) / 2,
        axisMin,
        axisMax
      );
      return;
    }
  });

  def.axes?.forEach((def) => {
    if (def.type === 'AXIS_X') {
      updateAxisX(def.id, gamepad.axes[def.axis], def.range[0], def.range[1]);
    } else if (def.type === 'AXIS_Y') {
      updateAxisY(def.id, gamepad.axes[def.axis], def.range[0], def.range[1]);
    }
  });
}

function updateButton(id: string, pressed: boolean): void {
  const elem = document.getElementById(id);
  if (!elem) return;
  if (pressed) {
    elem.classList.add('pressed');
  } else {
    elem.classList.remove('pressed');
  }
}

function updateAxisY(
  id: string,
  value: number,
  axisMin = -1,
  axisMax = 1
): void {
  const elem = document
    .getElementById(id)
    ?.querySelector('.axis-position') as HTMLElement;
  if (!elem) return;

  const pxRange = AXIS_Y_SIZE - elem.clientHeight;
  const n = pxRange - pxRange * ((value - axisMin) / (axisMax - axisMin));

  elem.style.top = `${n}px`;
}

function updateAxisX(
  id: string,
  value: number,
  axisMin = -1,
  axisMax = 1
): void {
  const elem = document
    .getElementById(id)
    ?.querySelector('.axis-position') as HTMLElement;
  if (!elem) return;

  const pxRange = AXIS_Y_SIZE - elem.clientHeight;
  const n = pxRange * ((value - axisMin) / (axisMax - axisMin));

  elem.style.left = `${n}px`;
}
