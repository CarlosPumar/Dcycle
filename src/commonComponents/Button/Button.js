import PropTypes from 'prop-types';
import { Button as ButtonAntd } from 'antd';

const Button = ({ text, type }) => {
  return (
    <ButtonAntd htmlType={type} type="primary">
      {text}
    </ButtonAntd>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  text: '',
  type: 'button',
};

export default Button;
