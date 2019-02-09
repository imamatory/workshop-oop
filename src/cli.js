import GeoIp from './GeoIp';

export default async (ip, { fetchURL, returnResult = console.log } = {}) => {
  const geoIp = new GeoIp({ fetchURL });
  const location = await geoIp.fetchLocation(ip);
  returnResult(location);
};
