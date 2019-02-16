import fs from 'then-fs';
import path from 'path';
import GeoData from '../src';

const readFixture = async fixtureFileName => fs.readFile(path.resolve(__dirname, '../__fixtures__', fixtureFileName), 'utf8');

let resultFixture;

const fetchMock = {
  get: async () => ({ data: resultFixture }),
};

const ipAddress = '134.234.3.2';

describe('getGeo', () => {
  beforeAll(async () => {
    resultFixture = JSON.parse((await readFixture('134.234.3.2.json')));
  });

  test('without ip', async () => {
    const geoData = new GeoData(fetchMock);
    const data = await geoData.get();
    expect(data).toEqual(resultFixture);
  });

  test('with ip', async () => {
    const geoData = new GeoData(fetchMock);
    const data = await geoData.get(ipAddress);

    expect(data).toEqual(resultFixture);
  });
});
