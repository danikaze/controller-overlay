import { WidgetAxis, InputAxis, InputButtonAsAxis } from '@src/interfaces';
import { createElem, addLabels } from '@src/dom';
import { onButtonChange, onAxisChange } from '@src/controllers';

const FULL_HEIGHT = 100;
const DEFAULT_AXIS_SIZE = 110;
const DEFAULT_STYLES = {
  x: {
    width: '110px',
    height: '20px',
  },
  y: {
    width: '20px',
    height: '110px',
  },
  xy: {
    width: '110px',
    height: '110px',
  },
};

export function renderAxis(def: WidgetAxis): HTMLElement {
  const axisType = `${def.input.x ? 'x' : ''}${def.input.y ? 'y' : ''}`;
  const widget = createElem({
    classes: `widget axis ${def.type}-${axisType}`,
    styles: {
      ...DEFAULT_STYLES[axisType as 'x' | 'y' | 'xy'],
      ...def.styles?.widget,
    },
  });

  const input = createElem({
    classes: 'input',
    parent: widget,
  });
  const position = createElem({
    classes: 'axis-position',
    parent: input,
    styles: def.styles?.position,
  });

  if (def.gridlines) {
    if (def.input.x) {
      def.gridlines.forEach((g) => {
        createElem({
          classes: 'gridline-y',
          data: { gridline: g },
          parent: input,
          styles: {
            left: `calc(${g}% - var(--border-width) / 2)`,
          },
        });
      });
    }
    if (def.input.y) {
      def.gridlines.forEach((percentage) => {
        createElem({
          classes: 'gridline-x',
          data: { gridline: percentage },
          parent: input,
          styles: {
            top: `calc(${FULL_HEIGHT - percentage}% - var(--border-width) / 2)`,
          },
        });
      });
    }
  }

  addLabels(widget, def.labels);
  addBehavior(def.input.x, 'x', position, DEFAULT_AXIS_SIZE);
  addBehavior(def.input.y, 'y', position, DEFAULT_AXIS_SIZE);

  return widget;
}

function addBehavior(
  input: InputAxis | InputButtonAsAxis | undefined,
  type: 'x' | 'y',
  position: HTMLElement,
  axisSize: number
): void {
  if (!input) return;

  if (isButtonAsAxis(input)) {
    addBehaviorButton(
      type,
      input.min.pad,
      input.min.button,
      input.max.pad,
      input.max.button,
      !!input.inverted,
      position,
      axisSize
    );
  } else {
    addBehaviorAxis(
      type,
      input.pad,
      input.axis,
      !!input.inverted,
      position,
      axisSize
    );
  }
}

function isButtonAsAxis(
  o: InputAxis | InputButtonAsAxis
): o is InputButtonAsAxis {
  return typeof (o as InputAxis).axis === 'undefined';
}

function updateX(elem: HTMLElement, axisSize: number, value: number) {
  const pxRange = axisSize - elem.clientWidth;
  const n = pxRange * ((value + 1) / 2);

  elem.style.setProperty('left', `${n}px`);
}
function updateY(elem: HTMLElement, axisSize: number, value: number) {
  const pxRange = axisSize - elem.clientHeight;
  const n = pxRange * ((value + 1) / 2);

  elem.style.setProperty('top', `${n}px`);
}

function addBehaviorButton(
  type: 'x' | 'y',
  minPadId: string,
  minButton: number,
  maxPadId: string,
  maxButton: number,
  inverted: boolean,
  position: HTMLElement,
  axisSize: number
): void {
  const update = (type === 'x' ? updateX : updateY).bind(
    undefined,
    position,
    axisSize
  );
  let minPressed = false;
  let maxPressed = false;

  const invert = (type === 'y' && !inverted) || (type === 'x' && inverted);
  const [minP, maxP] = invert ? [maxPadId, minPadId] : [minPadId, maxPadId];
  const [minB, maxB] = invert ? [maxButton, minButton] : [minButton, maxButton];

  onButtonChange(minP, minB, (button) => {
    minPressed = button.pressed;
    const value = (maxPressed ? 1 : 0) + (minPressed ? -1 : 0);
    update(value);
  });

  onButtonChange(maxP, maxB, (button) => {
    maxPressed = button.pressed;
    const value = (maxPressed ? 1 : 0) + (minPressed ? -1 : 0);
    update(value);
  });
}

function addBehaviorAxis(
  type: 'x' | 'y',
  padId: string,
  axis: number,
  inverted: boolean,
  position: HTMLElement,
  axisSize: number
): void {
  const update = (type === 'x' ? updateX : updateY).bind(
    undefined,
    position,
    axisSize
  );
  onAxisChange(padId, axis, (value) => update(inverted ? -1 * value : value));
}
