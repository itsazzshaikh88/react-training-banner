import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            {loggedIn ? (
              <>
                <h2>
                  Welcome, <span className="text-info">User</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </>
            ) : (
              <>
                <h4>You are not a valid user, Kindly Login</h4>
                <Link className="btn btn-warning mt-3" to="/login">Click to Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
