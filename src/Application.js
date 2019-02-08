import ApiIpFetcher from './ApiIpFetcher';
import ConsoleOutput from './ConsoleOutput';

export default class Application {
  constructor(container, args) {
    this.container = container;
    this.args = args;
  }

  run = async () => {
    const ip = this.args[0];
    const { fetchURL, print, formatData } = this.container;
    const api = new ApiIpFetcher({ fetchURL, ip });
    const { data, error } = await api.call();
    const output = new ConsoleOutput({ print, formatData, isError: error !== undefined });
    output.call(data || error.code);
  }
}
