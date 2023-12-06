import { useNavigate } from "react-router-dom";
import "./Login.css";


const ErrorLogin = ({ message }) => { //funcrion to handle the error login
  const navigate = useNavigate();

  return (   //to let users return to the login or register page.
    <div className="error-container" >
      <p>
        <span style={{ color: "red" }}>{message}</span>  
      </p>   
      <button onClick={() => navigate("/login")}>Back to Login </button>  
      <button onClick={() => navigate("/register")}>
        Create Account
      </button>  
    </div>
  ); 
};

export default ErrorLogin;
