import { Done } from 'mocha';

export type FunctionCallback<T> = ((value: T) => void) & (<T>(done: Done, value: T) => void);
