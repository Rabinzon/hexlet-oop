import url from 'url';

export default class GeoData {
  constructor(fetch, parse) {
    this.fetch = fetch;
    this.parse = parse;
  }
  
  async get(ip = '') {
    const { data } = await this.fetch.get(url.parse(`http://ip-api.com/json/${ip}`));
    return this.parse(data)
  }
}
