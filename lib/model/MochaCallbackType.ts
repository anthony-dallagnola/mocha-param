import { ExclusiveTestFunction, PendingTestFunction, TestFunction } from 'mocha';

export type MochaCallback = TestFunction | ExclusiveTestFunction | PendingTestFunction;
