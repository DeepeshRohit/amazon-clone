import React, {useState} from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email ,setEmail] = useState("");
    const[password ,setPassword] =useState("");

    const login = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
              history.push('/')
            })
            .catch(error => alert(error.message));
    }
    const register = e =>  {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it  created a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
}
    return (
        <div className= "login">
             <Link to='/'>
                <img className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                 alt ="" />
            </Link>
            <div className =" login__container">
            <h1> Sign In</h1>
            <form>
                <h5>
                    E-mail
                </h5>
                    <input  value ={email} onChange={e=> setEmail(e.target.value)} type = "text" />
                <h5>
                  Password
                </h5>
                <input  value ={password}   onChange={e =>setPassword(e.target.value)}  type = "password" />
                <button  onClick ={login} type ="submit " className="login__signIn">Sign In</button>
            </form>
            <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button  onClick={register} className ="login__signUp">Create your Amazon Account</button>
            
            </div>

        </div>
        
    )
}
export default Login;
