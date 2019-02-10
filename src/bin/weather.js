import weaterCli from '../weatherCli';

const [city] = process.argv.slice(2);
weaterCli(city);
