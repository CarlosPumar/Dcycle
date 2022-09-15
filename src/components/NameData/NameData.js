import { useState, useContext } from 'react';

import { get as getAgify } from '../../services/API/agify';
import { get as getGenderize } from '../../services/API/genderize';
import { get as getNationalize } from '../../services/API/nationalize';

import FormName from './FormName/FormName';
import StandarInformation from './Standarinformation/StandarInformation';

import { langContext } from '../../context/LangContext';

const NameData = () => {
  const [name, setName] = useState('');
  const [info, setInfo] = useState(null);
  const [error, setError] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const language = useContext(langContext);

  const getInfo = async (event) => {
    event.preventDefault();
    if (name === '') {
      setError(language.t('ErrorIntroduceName'));
      if (timeoutId) clearTimeout(timeoutId);
      const id = setTimeout(() => setError(''), 2000);
      setTimeoutId(id);
    } else {
      const agify = getAgify(name);
      const genderize = getGenderize(name);
      const nationalize = getNationalize(name);
      const result = await Promise.all([agify, genderize, nationalize]);
      setInfo({
        agify: result[0],
        genderize: result[1],
        nationalize: result[2],
      });
    }
  };
  return (
    <>
      <FormName submit={getInfo} name={name} setName={setName} error={error} />
      <StandarInformation info={info} />
    </>
  );
};

export default NameData;
