import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const baseUrlGenderize = `${BASE_URL}/genderize`;

const get = async (name) => {
  const url = `${baseUrlGenderize}/${name}`;
  const request = await axios.get(url);
  return request.data;
};

export { get };
