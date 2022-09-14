import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const baseUrlCovid = `${BASE_URL}/covid/historical`;

const get = async () => {
  const request = await axios.get(baseUrlCovid);
  return request.data;
};

export { get };
