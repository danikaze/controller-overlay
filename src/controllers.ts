// tslint:disable: no-console

const UPDATE_FPS = 60;

type GamepadListener = (pad: Gamepad) => void;
type ButtonListener = (button: GamepadButton) => void;
type AxisListener = (value: number) => void;

export function onButtonChange(
  padId: string,
  button: number,
  callback: ButtonListener
): void {
  registerGamePadListener(padId, (gamepad) =>
    callback(gamepad.buttons[button])
  );
}

export function onAxisChange(
  padId: string,
  axis: number,
  callback: AxisListener
): void {
  registerGamePadListener(padId, (gamepad) => callback(gamepad.axes[axis]));
}

export function initControllers() {
  window.addEventListener(
    'gamepadconnected',
    onGamepadConnected as EventListener,
    false
  );
  window.addEventListener(
    'gamepaddisconnected',
    onGamepadDisconnected as EventListener,
    false
  );
}

const gamepadMapping: {
  [padId: string]: {
    index: number;
    timestamp: number;
    listeners: GamepadListener[];
  };
} = {};
let pollHandler: number | undefined;

function registerGamePadListener(padId: string, listener: GamepadListener) {
  if (!gamepadMapping[padId]) {
    gamepadMapping[padId] = {
      index: -1,
      timestamp: 0,
      listeners: [],
    };
  }

  gamepadMapping[padId].listeners.push(listener);
}

function onGamepadConnected(event: GamepadEvent): void {
  console.log(`Gamepad connected [${event.gamepad.index}] ${event.gamepad.id}`);

  let mapping = gamepadMapping[event.gamepad.id];
  if (!mapping) {
    mapping = {
      index: event.gamepad.index,
      timestamp: event.gamepad.timestamp,
      listeners: [],
    };
    gamepadMapping[event.gamepad.id] = mapping;
  } else {
    mapping.index = event.gamepad.index;
    mapping.timestamp = event.gamepad.timestamp;
  }

  mapping.listeners.forEach((listener) => listener(event.gamepad));

  if (!pollHandler && needToPoll()) {
    pollHandler = window.setInterval(poll, 1000 / UPDATE_FPS);
  }
}

function onGamepadDisconnected(event: GamepadEvent): void {
  console.log(
    `Gamepad disconnected [${event.gamepad.index}] ${event.gamepad.id}`
  );
  if (!gamepadMapping[event.gamepad.id]) return;
  gamepadMapping[event.gamepad.id].index = -1;

  if (pollHandler && !needToPoll()) {
    clearInterval(pollHandler);
    pollHandler = undefined;
  }
}

function poll() {
  Object.values(gamepadMapping).forEach((mapping) => {
    const { index, timestamp, listeners } = mapping;

    if (index === -1 || listeners.length === 0) return;
    const gamepad = navigator.getGamepads()[index];
    if (!gamepad || timestamp >= gamepad.timestamp) return;

    mapping.timestamp = gamepad.timestamp;
    listeners.forEach((listener) => listener(gamepad));
  });
}

function needToPoll(): boolean {
  return !Object.values(gamepadMapping).every(
    ({ index, listeners }) => index === -1 || listeners.length === 0
  );
}
