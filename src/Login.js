import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory(); // change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push("/")
            }).catch(error => alert(error.message))
        // some fancy firebase login
    }
    
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    history.push('/') //se tiver cadastrado volta pra pag inicial
                }
            })
            .catch(error => alert(error.message))
        // do some fancy firebase register
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'></img>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail:</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password:</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By singning-in you agree to <strong>FAKE</strong> Amazon's conditions of Use & Sale. Please see our Privacy Notive, our Cookies Notive and out Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login