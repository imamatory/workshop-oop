import GeoIp from './GeoIp';

const parsedArgs = process.argv.slice(2);

export default async (args = parsedArgs, { fetchURL, returnResult = console.log } = {}) => {
  const geoIp = new GeoIp({ fetchURL });
  const location = await geoIp.fetchLocation(args[0]);
  returnResult(location);
};
