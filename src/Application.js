import ApiIpFetcher from './ApiIpFetcher';
import ConsoleOutput from './ConsoleOutput';

export default class Application {
  constructor(container, args) {
    this.container = container;
    this.args = args;
  }

  run = async () => {
    const ip = this.args[0];
    const { fetchURL, print } = this.container;
    const api = new ApiIpFetcher({ fetchURL, ip });
    const { data, error } = await api.call();
    const output = new ConsoleOutput({ print, isError: error !== undefined });
    output.call(data || error);
  }
}
