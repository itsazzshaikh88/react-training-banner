import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedIn } = useContext(UserContext);
  const { logout_user } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          KismatJi Kitchen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {loggedIn ? (
            <>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={logout_user}>Logout</button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
