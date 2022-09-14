import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const baseUrlNationalize = `${BASE_URL}/nationalize`;

const get = async (name) => {
  const url = `${baseUrlNationalize}/${name}`;
  const request = await axios.get(url);
  return request.data;
};

export { get };
