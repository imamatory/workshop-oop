import axios from 'axios';
import Application from './Application';

const defaultContainer = {
  print: (message, level) => console.log(level, message),
  formatData: data => JSON.stringify(data, null, 4),
  queryConfig: {},
  fetchURL: axios.request,
};

export default (argv = process.argv.slice(2), opts = {}) => {
  const container = { ...defaultContainer, ...opts.container };
  const app = new Application(container, argv);
  return app.run();
};
