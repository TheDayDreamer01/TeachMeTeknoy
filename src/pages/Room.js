import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import Chat from '../static/svg/Chat.svg';
import Peso from '../static/svg/Peso.svg';
import Participants from '../static/svg/Participants.svg';
import Send from '../static/svg/Send.svg';
import { Profile } from './components/Constants';
import axios from 'axios';


export const RoomPage = () => {

    const [ data, setData ] = useState({});
    const { fname, lname } = useParams(null);

    
    useEffect(() => {
        // try {
        //     const token = localStorage.getItem("Token");
        //     axios({
        //         method : "post",
        //         url : "/api/get/user-information/", 
        //         headers : `Token ${token}`,
        //         data : {
        //             "email" : email
        //         }
        //     }).then( (response) => {
        //         setData(response.data["0"] );
        //     })
        // } catch(e){
        //     console.log(e.Message);
        // };
    }, []);

    return (
        <section className="main">
            <NavBar email={data.email} 
                    fname={data.first_name} 
                    lname={data.last_name} 
                    course={data.course}/>

            <div className="background __body">
                <div className="room__announcement">
                    <div className="__header">
                        <p>
                            {fname} {lname} Activity Announcement
                        </p>    
                    </div>  
                    <div className="__content">
                        <div className="__heading">
                            <div>
                                <Profile fname={fname} lname={lname} />
                            </div>
                            <div className="__event">
                                <button>
                                    <img src={Chat} alt="" style={{height : "24px"}}/>
                                </button>
                                <button className="__event-btn">
                                    Add to Cart
                                </button>
                                <button className="__event-btn">
                                    Join
                                </button>
                            </div>
                        </div>
                        <div className="__title">
                            <div className="__event-title">
                                <h1>C Programming Tutorial </h1>
                                <div className="__event-date">
                                    12/23/2022 @5:30pm - 10:30pm 
                                </div>
                            </div>
                            <div className="__event-status">
                                <span>
                                    <img src={Peso} alt="" />
                                    120.00
                                </span>

                                <span>
                                    <img src={Participants} alt="" />
                                    150/200
                                </span>
                            </div>
                        </div>
                        <div className="__description">
                        
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

                        </div>
                        <div className="__comment">
                            
                            <div className="__comment-profile">
                                <Profile />
                                <p className="__comment-message">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                </p>
                            </div>

                        </div>
                        <div className="__chat">
                            <input type="text" placeholder="Comment" />
                            <button>
                                <img src={Send} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="room__participants">
                    <div className="__header">
                        <p>Participants</p>
                    </div>
                    <div className="__content">
            
                        <div className="__profile">
                            <Profile />
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}; 

export const ReviewPage = () => {
    return (
        <></>
    );
};