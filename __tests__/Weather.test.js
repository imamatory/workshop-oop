import Weather, { OpenWeatherAdapter } from '../src/Weather';

test('fetches city weather successfully', async () => {
  const result = { city: 'Moscow', report: { temp: -2, maxTemp: 0 } };
  const adapter = { fetchReport: () => Promise.resolve(result) };

  const instance = new Weather({ adapter });
  const report = await instance.fetchReport('Moscow');
  expect(report).toEqual(result);
});

test('works with MetaWeatherAdapter adapter', async () => {
  const result = { city: 'Moscow', report: { temp: -2, maxTemp: 0 } };
  const client = {
    request: ({ url }) => {
      if (url === 'api/location/search/') {
        return { data: [{ woeid: 123 }] };
      }
      return Promise.resolve({
        data: {
          title: 'Moscow',
          consolidated_weather: [{ the_temp: -2, max_temp: 0 }],
        },
      });
    },
  };

  const instance = new Weather({ client });
  const report = await instance.fetchReport('moscow');
  expect(report).toEqual(result);
});

test('works with OpenWeatherAdapter adapter', async () => {
  const result = { city: 'Moscow', report: { temp: -2, maxTemp: 0 } };
  const client = {
    request: () => Promise.resolve({
      data: {
        name: 'Moscow',
        main: { temp: -2, temp_max: 0 },
      },
    }),
  };

  const instance = new Weather({ client, adapter: new OpenWeatherAdapter({ client }) });
  const report = await instance.fetchReport('moscow');
  expect(report).toEqual(result);
});
