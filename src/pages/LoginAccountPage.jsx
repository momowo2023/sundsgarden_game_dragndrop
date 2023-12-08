import Login from "../components/Login";
import "../components/Login.css";
import LoginImage from '../components/Images/LoginImage.png';


export const LoginAccountPage = () => {
  return (
    <div className="page-container">
      <div className="image-container">
        <img src={LoginImage} alt="Left Half Image"/>
      </div>
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
};