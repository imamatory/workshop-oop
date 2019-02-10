import Weater, { OpenWeatherAdapter, MetaWeatherAdapter } from './Weather';

export default async (
  [city, service],
  { adapter: adapterParam, client, returnResult = console.log } = {},
) => {
  const selectAdapterClass = (name) => {
    switch (name) {
      case 'openWeather':
        return OpenWeatherAdapter;
      case 'metaweather':
      default:
        return MetaWeatherAdapter;
    }
  };
  const adapter = adapterParam || new (selectAdapterClass(service))({ client });
  const weater = new Weater({ client, adapter, returnResult });
  const report = await weater.fetchReport(city);
  returnResult(report);
};
