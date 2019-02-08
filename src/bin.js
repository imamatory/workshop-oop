import axios from 'axios';
import debug from 'debug';
import Application from './Application';

const defaultContainer = {
  print: (message, level) => debug(level)(),
  queryConfig: {},
  fetchURL: axios,
};

export default async (argv = process.argv, opts = {}) => {
  const container = { ...defaultContainer, ...opts.container };
  const app = new Application(container, argv);
  const result = await app.run();
  return result;
};
