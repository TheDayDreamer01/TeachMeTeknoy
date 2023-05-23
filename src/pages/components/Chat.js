import Avatar from '../../static/svg/Avatar2.svg';

export const ChatList = () =>{
    return(
         <div className='chat-items'>
            <div className='avatar'>
                <img src={Avatar} alt="" />
            </div>
            <div className='details'>
                <div className='name'>
                    <p>Lirae Que Data</p>
                </div>
                <div className='message-time'>
                    <p className='message'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt!</p>
                    <p className='time'> 	· 10:00 AM</p>
                </div>
            </div>
        </div>
    )
}

export const ChatSender = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const showTime = current.getHours()
        + ':' + current.getMinutes();

    return (
        <div className="sender-container">
            <div className='date-time'>
                <p>{date} at {showTime}</p>
            </div>
            <div className='group'>
                <div className="avatar">
                    <img className='icon'
                        src={Avatar} alt="" />
                </div>
                <div className="bubbles">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia, adipisci modi inventore sapiente natus?
                </div>
            </div>
        </div>
    )
}

export const ChatReceiver = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const showTime = current.getHours() 
        + ':' + current.getMinutes();

    return (
        <div className="receiver-container">
            <div className='date-time'>
                <p>{date} at {showTime}</p>
            </div>
            <div className='group'>
            <div className="bubbles">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia, adipisci modi inventore sapiente natus?
            </div>
            <div className="avatar">
                <img className='icon'
                src={Avatar} alt="" />
            </div>
        </div>
    </div>
    )
}
