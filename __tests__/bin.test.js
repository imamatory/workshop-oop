import { bin } from '../src';

test('fetches default ip successfully', async () => {
  const json = '{ success: true }';
  const fetchMock = () => Promise.resolve({ data: json });
  const container = {
    print: (result) => { expect(result).toBe(json); },
    fetchURL: fetchMock,
  };

  await bin([], { container });
});

test('fetches custom ip successfully', async () => {
  const ip = '127.0.0.1';
  const json = `{ ip: ${ip} }`;
  // FIXME: use fixtures
  const fetchMock = ({ url }) => Promise.resolve({ data: `{ ip: ${url} }` });
  const container = {
    print: (result) => { expect(result).toBe(json); },
    fetchURL: fetchMock,
  };

  await bin([ip], { container });
});
