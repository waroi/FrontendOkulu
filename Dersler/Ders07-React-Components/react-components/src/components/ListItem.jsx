import PropTypes from "prop-types";
// import { useEffect } from "react";

function ListItem({ student, value }) {
  // useEffect(() => {
  //   console.log("Deneme UseEffect");
  // }, []);
  return (
    <li>
      {student} {value}
    </li>
  );
}

ListItem.propTypes = {
  student: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ListItem;
