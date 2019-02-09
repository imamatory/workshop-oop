# workshop-oop
[![Build Status](https://travis-ci.org/imamatory/workshop-oop.svg?branch=master)](https://travis-ci.org/imamatory/workshop-oop)

##Usage
In console:
```
geo-ip 127.0.0.1
```

In code:
```js
import { GeoIp } from '...geo-ip'

const app = new GeoIp();
const location = await app.fetchLocation('8.8.8.8');
```
