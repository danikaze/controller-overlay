export type PadMapping = { [pad: string]: string | RegExp };

export interface Config {
  version: number;
  widgets: Widget[];
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
