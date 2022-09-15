import Input from 'antd/lib/input/Input';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { langContext } from '../../../context/LangContext';
import Button from '../../../commonComponents/Button/Button';
import style from './style';

const FormName = ({ submit, name, setName, error }) => {
  const language = useContext(langContext);

  return (
    <form onSubmit={submit}>
      <div style={style.divInput}>
        <h3 style={style.h3}>{language.t('Name')}</h3>
        <Input
          placeholder={language.t('IntroduceName')}
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          style={style.input}
        />
        <Button type="submit" text={language.t('Send')} />
        <h5 style={style.error}>{error}</h5>
      </div>
    </form>
  );
};

FormName.propTypes = {
  submit: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  error: PropTypes.string,
};

FormName.defaultProps = {
  submit: () => {},
  setName: () => {},
  name: '',
  error: '',
};

export default FormName;
