import PropTypes from "prop-types";

const Title = ({ size, onClick, text, ...props }) => {
  return (
    <div {...props} onClick={onClick} className={`custom-title ${size}`}>
      {text}
    </div>
  );
};

Title.propTypes = {
  size: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  size: "medium",
  text: "Başlık 1",
};

export default Title;
