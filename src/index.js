import '@babel/polyfill';
import debug from 'debug';

const log = debug('LOG');
export class A {}

export const sum = (a, b) => {
  log({ a, b });
  return a + b;
};
