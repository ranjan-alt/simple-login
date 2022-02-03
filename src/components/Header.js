// import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1 style={headingStyle}>{title}</h1>
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: "Task Manager",
};

// Header.propTypes = {
//   title: propTypes.string.isRequired,
// };

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
