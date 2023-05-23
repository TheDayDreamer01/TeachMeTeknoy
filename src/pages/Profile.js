import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Post } from "./components/Post";
import { EventsJoined, TopTutor } from './components/Panel';
import NavBar from "./components/Navbar";
import Subjects from './components/Subject';
import PostsIcon from '../static/svg/Posts.svg';
import StarIcon from '../static/svg/Star.svg';
import Exit from '../static/svg/Exit.svg';
import ProfileBio from '../static/svg/ProfileBio.svg';
import AvatarProfile from '../static/svg/AvatarProfile.svg';
import CoverPhoto from "../static/image/Library.png";

import Department from '../static/svg/Department.svg';
import Course from '../static/svg/Course.svg';

import Camera from '../static/svg/Camera.svg';
import axios from 'axios';


function Checker(number) {

    if (number.length == 10){
        for (let character of number) {
            if (!Number.isInteger(parseInt(character))) {
                return false;
            }
        }
        return true;
    }
    return false;
}

const ProfilePage = () => {
    
    const [ tab, setTab ] = useState(true);
    const [ editProfile, setEditProfile ] = useState(false);
    const [ error, setError ] = useState(""); 
    
    const [ defaultGcash, setDefaultGcash ] = useState({});
    const [ defaultGrabPay, setDefaultGrabPay ] = useState({});
    const [ defaultPayMaya, setDefaultPayMaya ] = useState({});
    const [ defaultPayPal, setDefaultPayPal ] = useState({});
    const [ allPost, setAllPost ] = useState([]);


    const [ data, setData ] = useState({});
    const { email } = useParams(null);
    
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
                method : "post",
                url : "/api/get/payment-method/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email,
                    "method" : "GCash",
                }
            });
            const requestThree = axios({
                method : "post",
                url : "/api/get/payment-method/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email,
                    "method" : "PayMaya",
                }
            });
            const requestFour = axios({
                method : "post",
                url : "/api/get/payment-method/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email,
                    "method" : "PayPal",
                }
            });
            const requestFive = axios({
                method : "post",
                url :"/api/get/payment-method/", 
                headers : {
                    Authorization : `Token ${token}`
                },
                data : {
                    "email" : email,
                    "method" : "GrabPay",
                }
            });

          
            axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive]).then(
                axios.spread((...responses) => {
                    const response1 = responses[0];
                    const response2 = responses[1].data[0];
                    const response3 = responses[2].data[0];
                    const response4 = responses[3].data[0];
                    const response5 = responses[4].data[0];

                    setData(response1.data[0] );
                    setDefaultGcash({
                        description : response2.description,
                        number : response2.number
                    });
                    setDefaultPayMaya({
                        description : response3.description,
                        number : response3.number
                    });
                    setDefaultPayPal({
                        description : response4.description,
                        number : response4.number
                    });
                    setDefaultGrabPay({
                        description : response5.description,
                        number : response5.number
                    });
                })
            );

        } catch(e){
            console.log(e.Message);
        };
    }, []);

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
    
    const ProfileInformation = () => {
        const [ bio, setBio ] = useState("");

        const [ gcashAccount, setGcashAccount] = useState("");
        const [ gcashNumber, setGcashNumber] = useState("");

        const [ grabPayAccount, setGrabPayAccount] = useState("");
        const [ grabPayNumber, setGrabPayNumber] = useState("");

        const [ payMayaAccount, setPayMayaAccount] = useState("");
        const [ payMayaNumber, setPayMayaNumber] = useState("");

        const [ payPalAccount, setPayPalAccount] = useState("");
        const [ payPalNumber, setPayPalNumber] = useState("");

        const HandleSubmit = (e) => {

            if ((gcashAccount != "" && gcashNumber == "") || (gcashAccount == "" && gcashNumber != "")) {
                setError("Required field. Please complete GCash details.");
                if (!Checker(gcashNumber)){
                    setError("Invalid input. Please enter a number.");
                }
            } else if((grabPayAccount != "" && grabPayNumber == "") || 
            (grabPayAccount == "" && grabPayNumber != "")){
                setError("Required field. Please complete GrabPay details.");
                if (!Checker(gcashNumber)){
                    setError("Invalid input. Please enter a number.");
                }
            } else if ((payMayaAccount != "" && payMayaNumber == "") || 
            (payMayaAccount == "" && payMayaNumber != "")){
                setError("Required field. Please complete PayMaya details.");
                if (!Checker(gcashNumber)){
                    setError("Invalid input. Please enter a number.");
                }
            } else if ((payPalAccount != "" && payPalNumber == "") || 
            (payPalAccount == "" && payPalNumber != "")){
                setError("Required field. Please complete PayPal details.");
                if (!Checker(gcashNumber)){
                    setError("Invalid input. Please enter a number.");
                }
            } else {
                try {
                    const token = localStorage.getItem("Token");

                    const requestOne = axios({
                        method : "post",
                        url : "/api/update/user-information/", 
                        headers : {
                            Authorization : `Token ${token}`
                        },
                        data : {
                            "email" : email,
                            "bio" : bio,
                        }
                    });
                    const requestTwo = axios({
                        method : "post",
                        url : "/api/post/record-payment-method/", 
                        headers : {
                            Authorization : `Token ${token}`
                        },
                        data : {
                            "user" : data.id,
                            "method" : "GCash",
                            "description" : gcashAccount,
                            "number" : gcashNumber
                        }
                    });
                    const requestThree = axios({
                        method : "post",
                        url : "/api/post/record-payment-method/", 
                        headers : {
                            Authorization : `Token ${token}`
                        },
                        data : {
                            "user" : data.id,
                            "method" : "PayMaya",
                            "description" : payMayaAccount,
                            "number" : payMayaNumber  
                        }
                    });
                    const requestFour = axios({
                        method : "post",
                        url : "/api/post/record-payment-method/", 
                        headers : {
                            Authorization : `Token ${token}`
                        },
                        data : {
                            "user" : data.id,
                            "method" : "PayPal",
                            "description" :payPalAccount,
                            "number" : payPalNumber
                        }
                    });
                    const requestFive = axios({
                        method : "post",
                        url : "/api/post/record-payment-method/", 
                        headers : {
                            Authorization : `Token ${token}`
                        },
                        data : {
                            "user" : data.id,
                            "method" : "GrabPay",
                            "description" : grabPayAccount,
                            "number" : grabPayNumber
                        }
                    });
                    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive]);
                    
                } catch (e){
                    console.log(e);
                }
            }
        };

        return (
            <form onSubmit={ HandleSubmit }>

                <div className="profile-information">
                    <p>Edit Profile</p>
                    <div className="__profile-information">

                        <div className="__info">
                            <div>
                                <label htmlFor="profile-department">
                                    <img src={Department} alt="" />    
                                    Department
                                </label>
                                <input type="text" id="profile-department" defaultValue={data.department} readOnly/>
                            </div>
                            <div>
                                <label htmlFor="profile-course">
                                    <img src={Course} alt="" />    
                                    Course
                                </label>
                                <input type="text" id="profile-course" defaultValue={data.course} readOnly />
                            </div>
                        </div>

                        <div className="__bio">
                            <label htmlFor="profile-bio">
                                <img src={ProfileBio} alt="" />    
                                Edit Bio
                            </label>
                            <textarea id="profile-bio" onChange={ (e) => setBio(e.target.value)} defaultValue={data.bio}></textarea>
                        </div>

                        
                    </div>
                </div>

                <div className='payment-details'>
                    <p className='title'>Edit Payment Details</p>
                    <div className='__payment-details'>
                        <div className="__channel">
                            <p>GCash</p>
                        </div>
                        <div className='__details'>
                            <div className='__account'>
                                <div className='__name'>
                                    <label htmlFor='account-name'>
                                        Account Name
                                    </label>
                                    <input type="text" id="account-name" onChange={ (e) => setGcashAccount(e.target.value)} defaultValue={ defaultGcash.description} />
                                </div>
                                <div className='__number'>
                                    <label htmlFor='account-number'>
                                        Account Number
                                    </label>
                                    <div className='__input-number'>
                                        <input type="text" id="account-number" onChange={ (e) => setGcashNumber(e.target.value)} defaultValue={defaultGcash.number} />
                                        <div className='vertical-line'></div>
                                        <span>+639</span>
                                    </div>
                                </div>
                            </div>
                        <hr/>
                        
                        </div>
                        <div className="__channel">
                            <p>GrabPay</p>
                        </div>
                        <div className='__details'>
                            <div className='__account'>
                                <div className='__name'>
                                    <label htmlFor='account-name'>
                                        Account Name
                                    </label>
                                    <input type="text" id="account-name" onChange={ (e) => setGrabPayAccount(e.target.value)}  defaultValue={defaultGrabPay.description}/>
                                </div>
                                <div className='__number'>
                                    <label htmlFor='account-number'>
                                        Account Number
                                    </label>
                                    <div className='__input-number'>
                                        <input type="text" id="account-number" onChange={(e) => setGrabPayNumber(e.target.value)} defaultValue={defaultGrabPay.number} />
                                        <div className='vertical-line'></div>
                                        <span>+639</span>
                                    </div>
                                </div>
                            </div>
                            <hr />

                        </div>
                        <div className="__channel">
                            <p>PayMaya</p>
                        </div>
                        <div className='__details'>
                            <div className='__account'>
                                <div className='__name'>
                                    <label htmlFor='account-name'>
                                        Account Name
                                    </label>
                                    <input type="text" id="account-name" onChange={ (e) => setPayMayaAccount(e.target.value)} defaultValue={defaultPayMaya.description}/>
                                </div>
                                <div className='__number'>
                                    <label htmlFor='account-number'>
                                        Account Number
                                    </label>
                                    <div className='__input-number'>
                                        <input type="text" id="account-number" onChange={(e) => setPayMayaNumber(e.target.value)} defaultValue={defaultPayMaya.number}/>
                                        <div className='vertical-line'></div>
                                        <span>+639</span>
                                    </div>
                                </div>
                            </div>
                            <hr />

                        </div>
                        <div className="__channel">
                            <p>PayPal</p>
                        </div>
                        <div className='__details'>
                            <div className='__account'>
                                <div className='__name'>
                                    <label htmlFor='account-name'  >
                                        Account Name
                                    </label>
                                    <input type="text" id="account-name" onChange={ (e) => setPayPalAccount(e.target.value)} defaultValue={defaultPayPal.description} />
                                </div>
                                <div className='__number'>
                                    <label htmlFor='account-number'>
                                        Account Number
                                    </label>
                                    <div className='__input-number'>
                                        <input type="text" id="account-number" onChange={(e) => setPayPalNumber(e.target.value)} defaultValue={defaultPayPal.number}/>
                                        <div className='vertical-line'></div>
                                        <span>+639</span>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr />

                        </div>
                    </div>
                    <div className='button'>
                        <button>Save Changes</button>
                    </div>
                </div>
            </form>
        );
    };

    const ProfileSection = () => {

        // Need not to be clickable if it is active
        const ChangeTab = (isTab) => setTab( isTab );
        
        const EditProfile = () => setEditProfile( (editProfile) ? false : true);
        
        return (
            <section className="profile">

                <div className='cover-container'>
                    <img src={CoverPhoto} alt="" className={(!editProfile) ? "" : "__fade-color"} />
                    {
                        editProfile && (
                            <div className='button'>
                                <img src={Camera}/>
                                <input type="file" id="upload" hidden />
                                <label for="upload">Change Cover Photo</label>
                            </div>
                        )
                    }
                </div>
    
                <div className="__profile-container">
                    <div className="__profile-box">
                        <div className="__profile-icon">
                            <img src={AvatarProfile} alt="" />
                                               
                            {
                                editProfile && (
                                    <div className='plus-button'>
                                        <input type="file" id="upload" hidden />
                                        <label for="upload">+</label>
                                    </div>
                                )
                            }
                        </div>
                       
                        <div className="__profile-information">
                            <div className="__information">
                                <span>
                                    <h1>{data.first_name} {data.last_name}</h1>
                                    <h3>@{data.course}</h3>
                                </span>
                                <span>
                                    {
                                        (editProfile) ? (
                                            <button onClick={ EditProfile} className="__exit-edit"> 
                                                Exit Edit Profile 
                                                <img src={Exit} alt="" />
                                            </button>
                                        ) : (
                                            <button onClick={ EditProfile }>Edit Profile</button>
                                        )
                                    }
                                </span>
                            </div>
    
                            <div className="__increments">
                                <div>
                                    <span>0 </span>Posts
                                </div>
                                <div>
                                    <span>0 </span>Subject Followed
                                </div>
                                <div>
                                    <span>0 </span>Events Joined
                                </div>
                            </div>
    
                            <div className="__biography">
                                <p>
                                    {data.bio}
                                </p>
                            </div>
    
                        </div>
                    </div>
    
                    {
                        (!editProfile) ? (
                            <div className="__tabs">
                                <button onClick={ () => ChangeTab(true) } className={ (tab) ? "active" : "" }>
                                    <img src={PostsIcon} alt=""/> Posts
                                </button>
                                <button onClick={ () => ChangeTab(false) } className={ (tab) ? "" : "active" }>
                                <img src={StarIcon} alt=""/> Reviews
                                </button>
                            </div>
                        ) : <></>
                    }
                </div>
            </section>
        );
    };

    const NewsFeed = () => {

        if (editProfile) {
            return <ProfileInformation />;
        } else {
            if (tab) {
                return  allPost.map((detail) => <Post />);
            } else {
                return <></>
            }
        }
        
    };
    
    return (
        <>
            { error && <ModalBox message={error} /> }
            <section className="main">
                <NavBar email={data.email} 
                        fname={data.first_name} 
                        lname={data.last_name} 
                        course={data.course}/>

                <div className="__body">
                    <div className="__left">
                        <Subjects email={data.email}/>
                    </div>
                    <div className="__container" style={{paddingTop : 0}}>
                        
                        <ProfileSection />
                        <NewsFeed />

                    </div>
                    <div className="__right">
                        <EventsJoined />
                        <TopTutor />
                    </div>
                </div>
            </section>
        </>
    );
};



export default ProfilePage;