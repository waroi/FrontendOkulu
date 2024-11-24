import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      data-testid={props.id}
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
