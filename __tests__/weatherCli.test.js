import cli from '../src/weatherCli';

test('fetches city weather successfully', async () => {
  const result = { city: 'Moscow', report: { temp: -2, maxTemp: 0 } };
  const adapter = { fetchReport: () => Promise.resolve(result) };
  const returnResult = (report) => { expect(report).toEqual(result); };

  await cli(['moscow'], { adapter, returnResult });
});
