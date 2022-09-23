import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const outfrom = location.state?.from?.pathname || "MainRoutes";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        navigate(outfrom, { replace: true });
      });
    }
  };
  return (
    
    <div>

      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit} styles={{marginLeft:"300px"}}>
        <div>
          <label>User Email</label>
          <br />
          <input
            
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
           
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" >
          Login
        </button>
      </form>
      </div>
      
  );
};

export default Login;


