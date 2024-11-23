import { useParams } from "react-router-dom";
const ParametreView = () => {
  const { id } = useParams();
  return <div>ParametreView {id}</div>;
};

export default ParametreView;
