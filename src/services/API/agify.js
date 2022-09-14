import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const baseUrlAgify = `${BASE_URL}/agify`;

const get = async (name) => {
  const url = `${baseUrlAgify}/${name}`;
  const request = await axios.get(url);
  return request.data;
};

export { get };
