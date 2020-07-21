export const UPDATE_FPS = 60;

export const AXIS_Y_SIZE = 110;
export const AXIS_X_SIZE = 110;

export type InputType =
  | 'BUTTON'
  | 'AXIS_X'
  | 'AXIS_Y'
  | 'BUTTON_AXIS_X'
  | 'BUTTON_AXIS_Y';

export interface PadButtonDefinitionButton {
  button: number;
  type: 'BUTTON';
  id: string;
}
export interface PadButtonDefinitionButtonAxis {
  type: 'BUTTON_AXIS_X' | 'BUTTON_AXIS_Y';
  id: string;
  buttonMin: number;
  buttonMax: number;
  range: [number, number];
}
export type PadButtonDefinition =
  | PadButtonDefinitionButton
  | PadButtonDefinitionButtonAxis;

export interface PadAxisDefinition {
  axis: number;
  type: 'AXIS_X' | 'AXIS_Y';
  id: string;
  range: [number, number];
}

export interface PadDefinition {
  buttons?: PadButtonDefinition[];
  axes?: PadAxisDefinition[];
}

export type PadDefinitions = Partial<{ [pad: string]: PadDefinition }>;

export type PadMapping = { [pad: string]: string | RegExp };
