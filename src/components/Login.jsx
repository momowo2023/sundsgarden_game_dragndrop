import { useState} from "react"; // uses the useState hook to add a variable to update the value.
import { useNavigate } from "react-router-dom"; //to allow users to access different components
import  ErrorLogin  from "./ErrorLogin";
import axios from "axios";
import Card from "./Card";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // to store and display any error messages
    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        console.log(user);
        if (user.email === email && user.password === password) 
        return user;
    };

    const handleSubmit = async (event) => {   
        event.preventDefault(); // prevent the default behavior of a form when it is submitted.
    
        /*const validUsername = "Eva"; 
        const validPassword = "9432";*/  // leave to ask Helena should we need to do hard core here
        
        if (email === "" || password === "" ){  // || equal or
            alert("All fields are required!")
        }

        const user = await axios
        .get("/users")
        .then((res) => checkUser(res.data, email, password))
        .catch((error) =>{
            console.log(error);
        })
        

        if (user.email === email && user.password === password){ //to ckeck if the username and password are match
            successMessage(); // Login sucessed, set an hello message
        }else{
            errorMessage("Invalid username or password. Please try again!" ) // Login failed, set an error message
        }
    };
    
    const successMessage = () => {
        alert(`Hi ${user.username}` );
        navigate(`/game/${username}`); //  access to the user's game page after login
        
        localStorage.setItem("user", JSON.stringify(user.id))
    };

    const errorMessage = (message) => {
        setError(message) //save error message
    };

    return( 
        <>
            {error && <ErrorLogin message={error} />}
            <div className="container">
                <Card>  
                    <form className="form-container">
                        <h1>Log in</h1>
                        <label>
                            <input 
                                type="text" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </label>
                        <label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </label>
                        <button className="btn" type="submit" onClick={handleSubmit}>
                            <p>Lpg in</p>
                        </button>
                    </form>
                </Card>
            </div>
        </>
    ); //onChange is used to listen for user input in a text input box., onFormSwitch to switch to other page
};

export default Login;