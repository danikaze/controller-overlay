export type PadMapping = { [pad: string]: string | RegExp };

export interface Config {
  version: number;
  name: string;
  images?: Image[];
  widgets: Widget[];
}

export interface Image {
  src: string;
  notes?: string;
  // position of the image relative to the parent
  top?: number | string;
  left?: number | string;
  // size of the displayed image (or its cropped area)
  width?: number | string;
  height?: number | string;
  // if cropped, start point (default to 0,0)
  offsetX?: number;
  offsetY?: number;
  zIndex?: number;
}

export type Widget = WidgetGroup | WidgetButton | WidgetAxis;

export interface WidgetLabel {
  center?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

type WidgetStyles = 'widget';

interface WidgetBase<T, S extends string = WidgetStyles> {
  type: T;
  name: string;
  labels?: WidgetLabel;
  styles?: Partial<{ [part in S | WidgetStyles]: { [key: string]: string } }>;
}

export interface InputButton {
  type: 'button';
  pad: string;
  button: number;
}

export interface InputAxis {
  type: 'axis';
  pad: string;
  axis: number;
  inverted?: boolean;
}

export interface InputAxisButton {
  type: 'axis-button';
  min: InputButton;
  max: InputButton;
  inverted?: boolean;
}

export interface WidgetGroup extends WidgetBase<'group'> {
  children: Widget[];
}

export interface WidgetButton extends WidgetBase<'button'> {
  input: InputButton;
}

export interface WidgetAxis extends WidgetBase<'axis', 'position'> {
  gridlines?: number[];
  input: {
    x?: InputAxis | InputAxisButton;
    y?: InputAxis | InputAxisButton;
  };
}
