import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../static/svg/Avatar.svg';


export const LayoutBuilder = (max_width) => {
    
    const [ width, setWidth ] = useState(
        window.innerWidth
    );
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth( window.innerWidth );
        });
    }, []);    

    if (width <= max_width){
        return true;
    } 
    return false;
};


export const Profile = ({ style, email, fname, lname, course }) => {
    return (
        <Link to={`/profile/${email}`} className="profile-icon">
            <img src={Avatar} alt="" />
            <span className="__name-right">
                <h3 style={style}>{fname} {lname}</h3>
                <p style={style}>@{course}</p>
            </span>
        </Link>
    );
};

export const SigninRequired = () => {
    return (
        <Link to="/signin/" className="profile-icon">
            <span className="__name-left">
                <h3>Sign In</h3>
            </span>
            <img src={Avatar} alt="" />
        </Link>
    );
};

