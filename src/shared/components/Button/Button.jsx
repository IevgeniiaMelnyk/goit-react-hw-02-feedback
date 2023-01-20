import PropTypes from 'prop-types';
import { Btn } from './Button.styled.js';

const Button = ({ children, type, onClick }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};
