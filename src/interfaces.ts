export type PadMapping = { [pad: string]: string | RegExp };

export interface Config {
  version: number;
  name: string;
  style?: string;
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

export type Widget =
  | WidgetGroup
  | WidgetButton
  | WidgetCssAxis
  | WidgetImageAxis;

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

export interface InputKeyAsButton {
  type: 'key-as-button';
  key: string;
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

export interface InputButtonAsAxis {
  type: 'button-as-axis';
  min: InputButton;
  max: InputButton;
  inverted?: boolean;
}

export interface InputAxisAsButton {
  type: 'axis-as-button';
  pad: string;
  axis: number;
  // axis value must be inside [min, max] to be considered as pressed
  min: number;
  max: number;
}

export interface InputButtonConditionNot {
  not:
    | InputButton
    | InputAxisAsButton
    | InputButtonConditionAnd
    | InputButtonConditionOr;
}

export interface InputButtonConditionAnd {
  and: (
    | InputButton
    | InputAxisAsButton
    | InputButtonConditionNot
    | InputButtonConditionOr
  )[];
}

export interface InputButtonConditionOr {
  or: (
    | InputButton
    | InputAxisAsButton
    | InputButtonConditionNot
    | InputButtonConditionAnd
  )[];
}

export type InputButtonCondition =
  | InputButtonConditionNot
  | InputButtonConditionAnd
  | InputButtonConditionOr;

export interface WidgetGroup extends WidgetBase<'group'> {
  children: Widget[];
}

export interface WidgetButton extends WidgetBase<'button'> {
  input:
    | InputButton
    | InputAxisAsButton
    | InputButtonCondition
    | InputKeyAsButton;
  images?: Image | Image[];
}

export interface WidgetCssAxis extends WidgetBase<'axis', 'position'> {
  gridlines?: number[];
  input: {
    x?: InputAxis | InputButtonAsAxis;
    y?: InputAxis | InputButtonAsAxis;
  };
}

export interface AxisImage extends Image {
  radiusX?: number;
  radiusY?: number;
}

export interface WidgetImageAxis extends WidgetBase<'axis-image'> {
  images: AxisImage | AxisImage[];
  input: {
    x?: InputAxis | InputButtonAsAxis;
    y?: InputAxis | InputButtonAsAxis;
  };
}
