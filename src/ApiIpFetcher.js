export default class ApiIpFetcher {
  baseURL = 'http://ip-api.com/json/'

  constructor({ fetchURL, ip = '' }, config) {
    this.config = config;
    this.fetchURL = fetchURL;
    this.ip = ip;
  }

  call = async () => {
    try {
      const { data } = await this.fetchURL({
        baseURL: this.baseURL,
        url: this.ip,
        ...this.config,
      });
      return { data };
    } catch (error) {
      return { error };
    }
  }
}
