// export type FunctionCallback = (done?: Done, value: T) => void
// export type FunctionCallback<T> = (value: T) & (done: Done, value: T) => void;
// export type FunctionCallback = ((value) => void) | ((done: Done, value) => void);
export type FunctionCallback<T> = ((value: T) => void) & (<T>(done: Done, value: T) => void);
