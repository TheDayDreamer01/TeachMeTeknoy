import { ChatList, ChatSender, ChatReceiver } from './components/Chat';
import NavBar from "./components/Navbar";
import Avatar from "../static/svg/Avatar2.svg";
import Search from "../static/svg/Search.svg";
import Send from "../static/svg/Send.svg";
import Department from "../static/svg/Department.svg";
import Course from "../static/svg/Course.svg";
import Email from "../static/svg/Email.svg";



const ChatPage = () => {
    return (
        <section className='main'>
            <NavBar/>
            <div className='background __body'>
                <div className='chat-container'>
                    <section className="container">
                        <div className="column">
                            <div className="searchbar">
                                <img src={Search} alt="" />
                                <input type="text" className='search-input'
                                    placeholder='Search'
                                />
                            </div>
                            <div className='chat-list'>
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                                <ChatList />
                            </div>
                        </div>
                        <div className="vertical-line"></div>

                        <div className="chat-interface">
                            <div className='header'>
                                <img src={Avatar} alt="" />
                                <p>Lirae Que Data</p>
                                <p className='online'></p>
                            </div>
                            <hr className='horizontal-line' />
                            <div className='columns'>
                                <div className='conversation'>
                                    <div className='chat-bubbles'>
                                        <div className='bubble'>
                                            <ChatSender />
                                            <ChatSender />
                                            <ChatSender />
                                            <ChatReceiver />
                                            <ChatSender />
                                            <ChatReceiver />
                                            <ChatReceiver />
                                        </div>
                                    </div>
                                    <hr className='horizontal-line' />
                                    <div className='message-input'>
                                        <input type="text" placeholder='Write a message...' />
                                        <p className='vertical-line'></p>
                                        <button>
                                            <img src={Send} alt="" />
                                        </button>

                                    </div>
                                </div>
                                <div className="vertical-line"></div>
                                <div className='person-details'>
                                    <div className='main'>
                                        <div className='container'>
                                            <div>
                                                <img src={Avatar} alt="" />
                                            </div>
                                            <div>
                                                <p className='name'>Lirae Que Data</p>
                                            </div>
                                            <div>
                                                <p>@Computer Engineer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        className='information'>
                                        <div className='department'>
                                            <img src={Department} alt="" />
                                            <p className='data'>College of Engineering and Architecture</p>
                                        </div>
                                        <div className='course'>
                                            <img src={Course} alt="" />
                                            <p className='data'>Bachelor of Science in Computer Engineering</p>

                                        </div>
                                        <div className='year'>
                                            <p className='circle'></p>
                                            <p className='data'>3rd Year </p>
                                        </div>
                                        <div className='email'>
                                            <img src={Email} alt="" />
                                            <p className='data'>liraeque.data@cit.edu</p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
    </div>
</section>
    );
};

export default ChatPage;