import { FunctionCallback } from './FunctionCallbackType';
import { MochaCallback } from './MochaCallbackType';

export interface ParamTestFunction {
  <T>(title: string, data: T[], callback: FunctionCallback, callbackMocha?: MochaCallback): void,
  only: <T>(title: string, data: T[], callback: FunctionCallback) => void,
  skip: <T>(title: string, data: T[], callback: FunctionCallback) => void,
}

