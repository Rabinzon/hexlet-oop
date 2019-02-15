import getGeo from '../src';
import result from '../__fixtures__/134.234.3.2';

const fetchMock = {
  get: () => ({ data: result }),
};

const ipAddress = '134.234.3.2';

test('getGeo', async () => {
  const data = await getGeo(ipAddress, fetchMock);
  expect(data).toEqual(result);
});
