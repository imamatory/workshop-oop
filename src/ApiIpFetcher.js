import axios from 'axios';

export default class ApiIpFetcher {
  baseURL = 'http://ip-api.com/json/'

  constructor({ fetchURL = axios.request }) {
    this.fetchURL = fetchURL;
  }


  fetch = ip => this.fetchURL({
    baseURL: this.baseURL,
    url: this.makeApiIpURL(ip),
  })
}
