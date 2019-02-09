# workshop-oop
[![Build Status](https://travis-ci.org/imamatory/workshop-oop.svg?branch=master)](https://travis-ci.org/imamatory/workshop-oop)

Run in console:
```
./bin/run
```

Use in code:
```js
import { GeoIp } from '...geo-ip'

const app = new GeoIp();
const result = await app.call({}, ['8.8.8.8']);
```
