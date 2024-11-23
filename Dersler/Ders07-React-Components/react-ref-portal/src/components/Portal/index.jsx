import ReactDOM from "react-dom";
const Portal = ({ target, text }) => {
  return ReactDOM.createPortal(
    <div>Selam dünyalı ben Portal, hedefim ise {text}</div>,
    target
  );
};

export default Portal;
