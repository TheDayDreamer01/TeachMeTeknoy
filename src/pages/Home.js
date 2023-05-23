import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar';
import Subjects from './components/Subject';
import CreatePost from './components/Create';
import { EventsJoined, TopTutor } from './components/Panel';
import axios from 'axios';
import { Post, Reviews } from './components/Post';


const HomePage = () => {

    const { email } = useParams(null);
    const [ data, setData ] = useState({});
    const [ allPost, setAllPost ] = useState([]);
    
    useEffect(() => {
        try {
            const token = localStorage.getItem("Token");
            let array = [];
            let requestOne, requestTwo;

            requestOne = axios({
                method : "get",
                url : "/api/get/all-activity/"
            });

            if (token){
                requestTwo = axios({
                    method : "post",
                    url : "/api/get/user-information/", 
                    headers : {
                        Authorization : `Token ${token}`
                    },
                    data : {
                        "email" : email
                    }
                });
                array.push(requestOne);
            }
            

            array.push(requestTwo);
            
            axios.all(array).then(
                axios.spread((...responses) => {
                    setAllPost( responses[0].data);
                    if (token) {
                        setData( responses[1].data["0"]);
                    }
                })
            );

        } catch(e){
            console.log(e.Message);
        };
    }, []);

    return (

        <section className="main">
            <NavBar email={data.email} 
                    fname={data.first_name} 
                    lname={data.last_name} 
                    course={data.course}/>

            <div className="__body">
                <div className="__left">
                    <Subjects email={data.email}/>
                </div>
                <div className="__container">
                    <CreatePost email={data.email}/>
                    
                    {
                        allPost.map((detail) => {
                            return (
                                <div key={detail.id} >
                                    <Post information={detail} />
                                </div>
                            )
                        })
                    }
                
                </div>
                <div className="__right">
                    <EventsJoined />
                    <TopTutor />
                </div>
            </div>
        </section>
    );
};  

export default HomePage;