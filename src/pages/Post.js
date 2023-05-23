import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './components/Navbar';
import axios from 'axios';

import Background1 from '../static/image/Background1.png';
import Background2 from '../static/image/Background2.png';
import Background3 from '../static/image/Background3.png';
import Background4 from '../static/image/Background4.png';
import None from '../static/svg/None.svg';
import Add from '../static/svg/Add.svg';
import BackArrow from '../static/svg/BackArrow.svg';
import Error from '../static/svg/Error.svg';


export const CreateTutorPostPage = () => {
    
    const { email } = useParams(null);
    const [ data, setData ] = useState({});

    const [ background, setBackground ] = useState(Background1);
    
    const [ title, setTitle ] = useState("");
    const [ link, setLink ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ payment, setPayment ] = useState("");
    const [ price, setPrice]  = useState("");
    const [ participants, setParticipants ] = useState("");
    const [ date, setDate ] = useState("");
    const [ start, setStart] = useState("");
    const [ end, setEnd] = useState("");
    const [ allSubject, setAllSubject ] = useState([]);
    
    const navigate = useNavigate();

    const [ error, setError ] = useState(""); 

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

    const GoBack = () => window.history.back();

    const ChangeBackground = (newBackground) => {
        setBackground(newBackground);
    };
    
    useEffect(() => {

        try {
            const token = localStorage.getItem("Token");

            const requestOne = axios({
                method : "post",
                url : "/api/get/user-information/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email
                }
            });
            const requestTwo = axios({
                method : "get",
                url : "/api/get/all-subjects/"
            });

            
            axios.all([requestOne, requestTwo]).then(
                axios.spread((...responses) => {
                    const response1 = responses[0];
                    const response2 = responses[1];
                    setData(response1.data["0"] );
                    setAllSubject(response2.data);
                })
            );

        } catch(e){
            console.log(e.Message);
        };
        
    }, []);

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        const token = localStorage.getItem("Token");

        if (title == ""){
            setError("Required field. Please input event title.");
        } else if (description == ""){
            setError("Required field. Please input event description.");
        } else if (subject == ""){
            setError("Required field. Please select event subject.");
        } else if (link == ""){
            setError("Required field. Please input meeting link.");
        } else if (payment == ""){
            setError("Required field. Please select payment methods.");
        } else if (price == ""){
            setError("Required field. Please input event price.");
        } else if (participants == ""){
            setError("Required field. Please input number of event participants.");
        } else if (date == ""){
            setError("Required field. Please select date of event.");
        } else if (start == ""){
            setError("Required field. Please input start time of the event.");
        } else if (end == ""){
            setError("Required field. Please input end time of the event.");
        } else {

            axios({
                method : "post",
                url : "/api/post/record-activity/",
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "host" : email,
                    "title" : title,
                    "subject" : subject,
                    "description" : description,
                    "event_link" :link,
                    "price" : price,
                    "event_date" : date, 
                    "event_participants" : participants,
                    "event_start_time" : start,
                    "event_end_time" : end,
                }
            });
            
            // navigate(`/home/${email}`);
        }
    };

    return (
        <>
            {error && <ModalBox message={error} />}
            <section className="main">
                <NavBar email={data.email} 
                        fname={data.first_name} 
                        lname={data.last_name} 
                        course={data.course}/>
                <div className="background __body">
                    <div className="card">
                        <div className="__header">
                            <button onClick={GoBack}>
                                <img src={BackArrow} alt="" className='backArrow' />
                            </button>
                        </div>

                        <div className="__content">
                            <div className="__left-event">

                                <div className="__heading">
                                    <h1>Event Details</h1>
                                    <p>Host a tutoring event in one go!</p>
                                </div>

                                <div className="__card-container">
                                    <p>Add Background</p>
                                    <img src={background} alt="" /> 
                                    
                                    <div className="__choices">
                                        <button>
                                            <img src={Add} alt="" />
                                        </button>
                                        <button>
                                            <img src={None} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background4) }>
                                            <img src={Background4} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background3) }>
                                            <img src={Background3} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background2) } >
                                            <img src={Background2} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background1) } >
                                            <img src={Background1} alt="" />
                                        </button>
                                    </div>
                                </div>
                            
                                <form className="__leftside" onSubmit={HandleSubmit}>
                                    <div className="__event-title">
                                        <label htmlFor="event-title">Event Title</label>
                                        <input type="text" id="event-title" onChange={(e)=>setTitle(e.target.value)}/> 
                                    </div>

                                    <div className="__event-link">
                                        <label htmlFor="link">Meeting Link</label>
                                        <input type="text" id="link" onChange={(e)=>setLink(e.target.value)}/>
                                    </div>

                                </form>

                            </div>
                            <div className="__right-event">

                                <form className="__rightside" onSubmit={HandleSubmit}>
                                    <div className="__event-dropdown">
                                        <label htmlFor="event-subject">Subjects</label>
                                        <select id="event-subject" name="cars" onChange={(e)=>setSubject(e.target.value)}>
                                            <option value="">Select Subject</option>
                                            {
                                                allSubject.map((sub) => {
                                                    return (
                                                        <option value={sub.name} key={sub.name}>{sub.name}</option>
                                                    );
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="__event-description">
                                        <label htmlFor="label-event">Event Description</label>
                                        <textarea id="label-event" onChange={(e)=>setDescription(e.target.value)}></textarea>
                                    </div>
                                    
                                    <div className="__price-date">
                                        <div class="event-price">
                                            <label htmlFor="price" >Price</label>
                                            <input type="number" id="price" placeholder="0.00" className='price' classname='date' />
                                            <span>Php</span> 
                                        </div>

                                        <div className="event-date">
                                            <label htmlFor="date">Date</label>
                                            <input type="date" id="date" className='date'
                                            />
                                        </div>
                                    </div>

                                    <div className="__participants-time">

                                        <div className='num-participants'>
                                            <label htmlFor="participants" className='label-participants'>No. of Participants</label>
                                            <input type="number" id="participants"/>
                                        </div>


                                        <div className='time'>
                                            <label htmlFor="time" >Time</label>
                                            <input type="time" id='time' className='time' name='start-time' />-
                                            <input type="time" id='time' className='time' name='end-time' />
                                        </div>
                                    </div>

                                    <div className="__event-payment">
                                        <p>Payment Methods</p>

                                        <div className="__checkbox">
                                            <span   className="__payment-checkbox">
                                                <input type="checkbox" value="GCash" id="GCash"/>
                                                <label htmlFor="GCash">GCash</label>
                                            </span>

                                            <span className="__payment-checkbox">
                                                <input type="checkbox" value="PayMaya" />
                                                <label htmlFor="PayMaya">PayMaya</label>
                                            </span>

                                            <span className="__payment-checkbox"> 
                                                <input type="checkbox" value="PayPal" />
                                                <label htmlFor="PayPal">PayPal</label>
                                            </span>
                                            
                                            <span className="__payment-checkbox">
                                                <input type="checkbox" value="GrabPay" />
                                                <label htmlFor="GrabPay">GrabPay</label>
                                            </span>
                                        </div>
                                    </div>

                                    <button type="submit" className="__event-button">Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
// End Content : @TutorPage


export const CreateTuteePostPage = () => {

    const { email } = useParams(null);
    const [ data, setData ] = useState({});

    const [ background, setBackground ] = useState(Background1);
    const [ title, setTitle ] = useState("");
    const [ description, setDescription] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ allSubject, setAllSubject ] = useState([]);
    const [ error, setError ] = useState(""); 

    const navigate = useNavigate();


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

    const GoBack = () => window.history.back();

    const ChangeBackground = (newBackground) => {
        setBackground(newBackground);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        
        if (title == ""){
            setError("Required field. Please input Activity Title.");
        } else if (subject == ""){
            setError("Required field. Please input Activity Subject.");
        } else if (description == ""){
            setError("Required field. Please input Activity Description.");
        } else {

            const token = localStorage.getItem("Token");

            axios({
                method : "post",
                url : "/api/post/record-activity/",
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "host" : data.id,
                    "title" : title,
                    "subject" : subject,
                    "description" : description
                }
            });
            navigate(`/home/${email}/`);
        }
    };
    
    useEffect(() => {

        try {
            const token = localStorage.getItem("Token");

            const requestOne = axios({
                method : "post",
                url : "/api/get/user-information/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email
                }
            });
            const requestTwo = axios({
                method : "get",
                url : "/api/get/all-subjects/"
            });

            
            axios.all([requestOne, requestTwo]).then(
                axios.spread((...responses) => {
                    const response1 = responses[0];
                    const response2 = responses[1];
                    setData(response1.data["0"] );
                    setAllSubject(response2.data);
                })
            );

        } catch(e){
            console.log(e.Message);
        };
        
    }, []);

    return (
        <>
            {error && <ModalBox message={error} />}
            <section className="main">
                <NavBar email={data.email} 
                        fname={data.first_name} 
                        lname={data.last_name} 
                        course={data.course}/>
                <div className="background __body">
                    
                    <div className="card">
                        <div className="__header">
                            <button onClick={GoBack}>
                                <img src={BackArrow} alt="" className='backArrow' />
                            </button>
                        </div>

                        <div className="__content">
                            <div className="__left-event">

                                <div className="__heading">
                                    <h1>Activity Details</h1>
                                    <p>Find a tutor for your academic needs.</p>
                                </div>

                                <div className="__card-container" >
                                    <p>Add Background</p>
                                    <img src={background} alt="" /> 
                                    
                                    <div className="__choices">
                                        <button>
                                            <img src={Add} alt="" />
                                        </button>
                                        <button>
                                            <img src={None} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background4) }>
                                            <img src={Background4} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background3) }>
                                            <img src={Background3} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background2) } >
                                            <img src={Background2} alt="" />
                                        </button>
                                        <button onClick={() => ChangeBackground(Background1) } >
                                            <img src={Background1} alt="" />
                                        </button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="__right-event">

                                <div className="__event-title">
                                    <label htmlFor="event-title">Activity Title</label>
                                    <input type="text" id="event-title" onChange={(e)=>setTitle(e.target.value) } /> 
                                </div>

                                <form className="__rightside" onSubmit={HandleSubmit}>
                                    <div className="__event-dropdown">
                                        <label htmlFor="event-subject">Subjects</label>
                                        <select id="event-subject" onChange={(e)=>setSubject(e.target.value)}>
                                            <option value="0">Select Subject...</option>

                                            {
                                                allSubject.map((sub) => {
                                                    return (
                                                        <option value={sub.id} key={sub.name}>{sub.name}</option>
                                                    );
                                                })
                                            }
                                            
                                        </select>
                                    </div>

                                    <div className="__event-description">
                                        <label htmlFor="label-event">Activity Description</label>
                                        <textarea id="label-event" onChange={(e)=>setDescription(e.target.value)}></textarea>
                                    </div>

                                    <button type="submit" className="__event-button">Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
// End Content : @TuteePage

