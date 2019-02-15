export default async (ip, fetch) => {
  const { data } = await fetch.get(`http://ip-api.com/json/${ip}`);

  return data;
};
