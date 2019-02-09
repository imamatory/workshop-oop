import ApiIpFetcher from './ApiIpFetcher';
import ConsoleOutput from './ConsoleOutput';

export default class GeoIp {
  constructor(container, args) {
    this.container = container;
    this.args = args;
  }

  call = async () => {
    const ip = this.args[0];
    const { fetchURL, print, formatData } = this.container;
    const api = new ApiIpFetcher({ fetchURL, ip });
    // Don't know how to work with errors in *oop-style*
    const { data, error } = await api.call();
    const output = new ConsoleOutput({ print, formatData });
    output.call(data || error);
  }
}
