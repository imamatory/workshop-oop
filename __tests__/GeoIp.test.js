import GeoIp from '../src';

test('fetches default ip successfully', async () => {
  const result = { city: 'Moscow', country: 'Russia', query: '123.123.123.123' };
  const fetchMock = () => ({ data: result });

  const instance = new GeoIp({ fetchURL: fetchMock });
  const location = await instance.fetchLocation();
  expect(location).toEqual(result);
});
