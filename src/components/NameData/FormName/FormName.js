import Input from 'antd/lib/input/Input';
import PropTypes from 'prop-types';
import Button from '../../../commonComponents/Button/Button';
import style from './style';

const FormName = ({ submit, name, setName }) => {
  return (
    <form onSubmit={submit}>
      <div>
        <h3 style={style.h3}>Nombre</h3>
        <Input
          placeholder="Introduzca un nombre"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          style={style.input}
        />
        <Button type="submit" text="Enviar" />
      </div>
    </form>
  );
};

FormName.propTypes = {
  submit: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
};

FormName.defaultProps = {
  submit: () => {},
  setName: () => {},
  name: '',
};

export default FormName;
