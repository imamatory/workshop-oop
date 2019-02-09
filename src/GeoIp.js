import axios from 'axios';

export default class GeoIp {
  constructor({ fetchURL = axios.request }) {
    this.fetchURL = fetchURL;
  }

  fetchApi = ip => this.fetchURL({
    baseURL: 'http://ip-api.com/json/',
    url: ip,
  })

  fetchLocation = async (ip = '') => {
    const { data } = await this.fetchApi(ip);
    return data;
  }
}
