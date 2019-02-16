## get-geo
Library that returns geo information about ip address from the service http://ip-api.com

[![Build Status](https://travis-ci.org/Rabinzon/hexlet-oop.svg?branch=master)](https://travis-ci.org/Rabinzon/hexlet-oop)

## CL usage
```sh
$ get-geo [ip address]

{
  "as": "AS1586 DoD Network Information Center",
  "city": "Sierra Vista",
  "country": "United States",
  "countryCode": "US",
  "isp": "DoD Network Information Center",
  "lat": 31.5552,
  "lon": -110.35,
  "org": "USAISC",
  "query": "134.234.3.2",
  "region": "AZ",
  "regionName": "Arizona",
  "status": "success",
  "timezone": "America/Phoenix",
  "zip": "85613"
}

```

## Library usage

```js
import GeoData from 'GeoData';
const geoData = new GeoData();
await geoData.get(ip);
```

## Setup

```sh
$ make install
$ make build
$ npm ln
```

## Run tests

```sh
$ make test
```

