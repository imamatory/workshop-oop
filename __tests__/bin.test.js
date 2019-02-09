import { bin } from '../src';

test('fetches default ip successfully', async () => {
  const json = '{ success: true }';
  const fetchMock = () => ({ data: json });
  const container = {
    print: (level, result) => {
      expect(level).toBe('info');
      expect(result).toBe(json);
    },
    fetchURL: fetchMock,
    formatData: x => x,
  };

  await bin([], { container });
});

test('fetches custom ip successfully', async () => {
  const ip = '127.0.0.1';
  const json = `{ ip: ${ip} }`;
  // FIXME: how to test wothout diving in details?
  const fetchMock = ({ url }) => ({ data: `{ ip: ${url} }` });
  const container = {
    print: (level, result) => {
      expect(level).toBe('info');
      expect(result).toBe(json);
    },
    fetchURL: fetchMock,
    formatData: x => x,
  };

  await bin([ip], { container });
});
