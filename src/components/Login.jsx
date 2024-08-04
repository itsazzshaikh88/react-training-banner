import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const { setLoggedIn } = useContext(UserContext);
  //   const inputRef = useRef(null);
  const navigate = useNavigate();

  const validateUser = () => {
    if (username === "zohaib") {
      setLoggedIn(true);
      // set local storage value
      localStorage.setItem("user_status", true);
      navigate("/");
    } else {
      // inputRef.current.value = ''
      alert("Invalid User");
      setUserName("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h3>Login Here</h3>
          <hr />
          <div className="form-group mt-4">
            <label htmlFor="">Username</label>
            <input
              type="text"
              //   ref={inputRef}
              className="form-control"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <button className="mt-3 btn btn-success" onClick={validateUser}>
            Click To Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
