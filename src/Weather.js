import axios from 'axios';

export class AbstractAdapter {
  constructor({ client = axios, requestConfig } = {}) {
    this.client = client;
    this.requestConfig = requestConfig;
  }

  formatResponse = ({ data }) => data

  fetch(params) {
    return this.client.request({
      ...this.requestConfig,
      ...params,
    });
  }
}

export class MetaWeatherAdapter extends AbstractAdapter {
  baseURL = 'https://www.metaweather.com/'

  formatResponse = ({ data }) => ({
    city: data.title,
    report: {
      temp: data.consolidated_weather[0].the_temp,
      maxTemp: data.consolidated_weather[0].max_temp,
    },
  })

  fetchReport = async (city) => {
    const { data: [{ woeid }] } = await this.fetch({
      baseURL: this.baseURL,
      url: 'api/location/search/',
      params: {
        query: city,
      },
    });

    const response = await this.fetch({
      baseURL: this.baseURL,
      url: `api/location/${woeid}`,
    });

    return this.formatResponse(response);
  }
}

export class OpenWeatherAdapter extends AbstractAdapter {
  baseURL = 'https://samples.openweathermap.org/'

  formatResponse = ({ data }) => ({
    city: data.name,
    report: {
      temp: data.main.temp,
      maxTemp: data.main.temp_max,
    },
  })

  fetchReport = async (city) => {
    const response = await this.fetch({
      baseURL: this.baseURL,
      url: 'data/2.5/weather',
      params: {
        q: city,
        appid: 'b6907d289e10d714a6e88b30761fae22',
      },
    });

    return this.formatResponse(response);
  }
}

export default class Weather {
  constructor({
    adapter, requestConfig, client,
  }) {
    this.adapter = adapter || new MetaWeatherAdapter({ client, requestConfig });
  }

  fetchReport = city => this.adapter.fetchReport(city);
}
