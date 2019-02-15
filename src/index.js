import 'source-map-support/register';
import axios from 'axios';
import getGeo from './getGeo';

export default async (ip = '', fetch = axios) => getGeo(ip, fetch);
