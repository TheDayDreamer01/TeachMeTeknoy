import { Link } from 'react-router-dom';
import { Profile } from './Constants';
import { useEffect, useState } from 'react';
import Menu from '../../static/svg/Menu.svg';
import Room from '../../static/svg/Room.svg';
import Signin from '../../static/image/Signin.png';
import StarReview from '../../static/svg/StarReview.svg';
import YellowStar from '../../static/svg/YellowStar.svg';
import axios from 'axios';


function ParseDate(date) {
    let newDate = "";
    for (let character of date){
        if (character != "T") {
            newDate += (character == "-") ? "/" : character;
        } else {
            return newDate;
        }
    }
}

export const Post = ({ information }) => {

    const [user, setUser] = useState({});
    const [subject, setSubject] = useState({});

    useEffect(() => {   
        const token = localStorage.getItem("Token");

        const requestOne = axios({
            method : "post",
            url : "/api/get/post-user/",
            headers : {
                Authorization : `Token ${token}`
            },
            data : {
                "host" : information.host
            }
        })
        
        const requestTwo = axios({
            method : "post",
            url : "/api/get/subject-name/",
            headers : {
                Authorization : `Token ${token}`
            },
            data : {
                "subject" : information.subject
            }
        });
        
        axios.all([requestOne, requestTwo]).then(
            axios.spread((...responses) => {
                setUser(responses[0].data[0]);
                setSubject(responses[1].data[0]);
            })
        );

    }, []);


    return (
        <section className="post">
            <div className="__header">
                <Profile email={user.email} 
                        fname={user.first_name} 
                        lname={user.last_name} 
                        course={user.course}/>
                <div className="__right">
                    <p>{ ParseDate(information.created) }</p>
                    <button>
                        <img src={Menu} alt="" />
                    </button>
                </div>
                
            </div>
            <img src={Signin} alt="" className="__photo" />
            <div className="__main">
                <p className="__message">
                    {information.description}
                </p>
            </div>
            <div className="__footer">
                <span className="HorizontalLine"></span>
                <div className="__comment-container">
                    <Link className="__comment" to={`/user-room/${user.first_name}/${user.last_name}/`}>
                        <img src={Room} alt="" />
                        <p>Comment</p>
                    </Link>
                    <p className="__subject">{ subject.name }</p>
                </div>
            </div>
        </section>
    )
};

export const Reviews = () => {
    return (
        <section className='reviews'>
            <div className=" main-container"> 
            <div className="reviews-container"> 
            
                <div className='main-star'>
                    <img src={StarReview} />
                    <p>3.5/5</p>
                </div>
                <div className='post'>
                    <Post />
                </div>
                <div className='comments-container'>
                    <div className='name-date'>
                        <Profile />
                        <p>12/23/2022</p>
                    </div>
                    <div className='comments'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac justo nisi. Cras a malesuada.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac justo nisi. Cras a malesuada.
                        </p>
                        <div className='stars'>
                            <img src={YellowStar} />
                            <p>3.5/5</p>
                        </div>

                    </div>
                </div>
                    <div className='comments-container'>
                        <div className='name-date'>
                            <Profile />
                            <p>12/23/2022</p>
                        </div>
                        <div className='comments'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac justo nisi. Cras a malesuada.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac justo nisi. Cras a malesuada.
                            </p>
                            <div className='stars'>
                                <img src={YellowStar} />
                                <p>3.5/5</p>
                            </div>

                        </div>
                    </div>
                    
                
            </div>
            </div>
          
        </section>
    );
};

