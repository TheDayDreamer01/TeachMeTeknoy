import { Link, useNavigate } from 'react-router-dom';
import { LayoutBuilder, Profile, SigninRequired } from './Constants';
import DownArrow from '../../static/svg/DownArrow.svg'; 
import SearchIcon from '../../static/svg/Search.svg';
import WildCatLogo from '../../static/svg/Logo.svg';
import axios from 'axios';
import { useEffect } from 'react';

const SearchBar = () => {
    return (
        <>
            <form className="searchbar">
                <input type="text" className="__bar" placeholder="Search"/>
                <button className="__button">
                    <img src={SearchIcon} alt="" />
                </button>
            </form> 
        </>
    );
};


const NavBar = ({email, fname, lname, course }) => {
    const navigate = useNavigate();
    const width = 1000;
    
    const LogoutUser = async () => {
        try {
            const token = localStorage.getItem("Token");
            await axios({
                method : "post",
                url : "/api-auth-rest/logout/",
                headers : {
                  Authorization : `Token ${token}`
                }
            });
        } catch (e) {
            console.log(e.Message);
        }
        localStorage.removeItem("Token");
        localStorage.removeItem("Email");
        navigate("/signin/");
    };

    return (
        <>
            <nav className="navbar">
                
                {/* @Navbar Container */}
                <div className="__container">

                    {/* @Logo Container */}
                    <Link className="__logo" to={ (course === undefined || course == "") ? "/home/" : `/home/${email}/` }>
                        <img src={WildCatLogo} alt="" />
                        <span className="__name">
                            <span>Teach</span>
                            <span>Me</span>
                            <span>Teknoy</span>
                        </span>
                    </Link>

                    {/* @Search Bar Container*/}
                    {
                        (!LayoutBuilder(width)) ?
                            SearchBar() : <></>
                    }
                    
                    {/* @Profile Icon Container */}
                    <div className="__profile">

                        {
                            (localStorage.getItem("Token") && fname) ?  (
                                <>
                                    <Profile style={{
                                        color : "white",
                                    }} fname={fname} 
                                        email={email}
                                        lname={lname} 
                                        course={course}/>
            
                                    <div className="__dropdown">
                                        <button className="__button">
                                            <img src={DownArrow} alt="" />
                                        </button>
                                        <div className="__content">
                                            <Link to={`/home/${email}/`}>Home</Link> 
                                            <Link to={`/chat/${email}/`}>Chat</Link> 
                                            <Link to={`/checkout/${email}/`}>Checkout</Link> 
                                            <a href="/signin/" onClick={LogoutUser}>Logout</a> 
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <SigninRequired />  
                            ) 
                        }
            
                    </div>
                </div>
                {/* @Search Bar Container*/}
                {
                    (LayoutBuilder(width)) ?
                        SearchBar() : <></>
                }
                
            </nav>
        </>
    );
};


export default NavBar;