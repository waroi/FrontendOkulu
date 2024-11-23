import { Outlet } from "react-router-dom";
const NewView = () => {
  return (
    <>
      <h1>Haberler</h1>
      <Outlet />
    </>
  );
};

export default NewView;
