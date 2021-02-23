import { FunctionCallback } from './FunctionCallbackType';
import { MochaCallback } from './MochaCallbackType';

export type ParamTestFunction = {
  <T>(title: string, data: T[], callback: FunctionCallback<T>, callbackMocha?: MochaCallback): void,
  only: <T>(title: string, data: T[], callback: FunctionCallback<T>) => void,
  skip: <T>(title: string, data: T[], callback: FunctionCallback<T>) => void,
}

