import axios from 'axios';
import GeoIp from './GeoIp';

const defaultContainer = {
  print: console.log,
  formatData: data => JSON.stringify(data, null, 4),
  queryConfig: {},
  fetchURL: axios.request,
};

export default (argv = process.argv.slice(2), opts = {}) => {
  const container = { ...defaultContainer, ...opts.container };
  const app = new GeoIp(container, argv);
  return app.call();
};
