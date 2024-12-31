import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" data-testid="home-page" className="navbar-item">
            Student Portal
          </Link>
        </div>
        <div className="navbar-links">
          <Link
            to="/student"
            data-testid="student-page"
            className="navbar-item"
          >
            All Students
          </Link>
          <Link to="/add" data-testid="add-page" className="navbar-item">
            Add Student
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
