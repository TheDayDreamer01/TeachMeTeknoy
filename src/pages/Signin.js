import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../static/svg/Error.svg';
import Logo from '../static/svg/Logo2.svg';
import Logo2 from '../static/svg/Logo3.svg';
import Eye from '../static/svg/Eye.svg';
import Blink from '../static/svg/Blink.svg';
import axios from 'axios';


const SigninPage = () => {

    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");  

    const [ error, setError ] = useState(""); 
    const [ eye, setEye ] = useState(false);

    const ModalBox = ({ message }) => {
        return (
            <section className="background-error" onClick={() => setError("")}>
                <div className="__error-prompt">
                    <div className="__heading">
                        <img src={Error} alt="" />
                    </div>
                    <div className="__status">
                        <div className="__message">
                            <h1>Warning!</h1>
                            <p>{message}</p>
                            <button onClick={ () => setError("") }>CLOSE</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
    
    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (email == ""){
            setError("Email Field must not be Empty, Please Input a valid email.");
        } else if (password == "") {
            setError("Password Field must not be Empty, Please Input a valid password.");
        } else {

            try {
                const response = await axios({
                    method : "post",
                    url : "/api-auth-rest/login/",
                    data : {
                        "username" : email, 
                        "email" : email,
                        "password" : password
                    }
                });
                localStorage.setItem("Token", response.data.key);
                localStorage.setItem("Email", email);
                navigate(`/home/${email}/`);
            } catch (e){
                setError("Email and Password does not match, Please Input a valid User.")
            }
        }
    }; 

    const ChangeInput = () => setEye( (eye) ? false : true );

    return (
        <section className="signin">

            <div className="__image">
                <img src={Logo} className="__logo" alt=""/>
            </div>
            { error && <ModalBox message={error} /> }
            <div className="__content">
                <img src={Logo2} className="__logo" alt="" />
                    
                <div className="__quote">
                    <h1>Strive For</h1>
                    <h1>Greatness</h1>
                    <h4>Be ready, Techonologian!</h4>
                </div>

                <form onSubmit={HandleSubmit} method="POST" className="__form">
                    <div className="__email-input">
                        <label htmlFor="email">Enter Email Address: </label>
                        <input type="email" id="email" placeholder="JohnDoe@cit.edu"
                        onChange={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="__password-input">
                        <label htmlFor="password">Enter Password: </label>
                        <div className='__password'>
                            <input type={(eye) ? "text" : "password"} id="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                            <span>
                                <img src={ (eye) ? Eye : Blink } onClick={ ChangeInput } />
                            </span>
                        </div>
                    </div>
                    <button type="submit">Sign in</button>
                    <p className="__disclaimer">
                        By signing in, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SigninPage;




        
    
  
        
