import 'source-map-support/register';
import axios from 'axios';
import GeoData from './GeoData';

export default class {
  constructor(fetch = axios, parse = t => t) {
    this.geoData = new GeoData(fetch, parse);
  }

  async get(ip = '') {
    return this.geoData.get(ip);
  }
}
