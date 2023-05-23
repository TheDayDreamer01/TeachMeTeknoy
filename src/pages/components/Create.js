import { Link } from 'react-router-dom';
import Avatar from '../../static/svg/Avatar.svg';
import Activities from '../../static/svg/Activities.svg';
import Event from '../../static/svg/Event.svg';


const CreatePost = ({email}) => {
    return (
        <section className="create-post">
            <div>
                <Link to={ 
                    (!localStorage.getItem("Token")) ? "/signin/" : `/profile/${email}`
                } className="__avatar">
                    <img alt="" src={Avatar} />
                </Link>
                <h3>Create Post</h3>
            </div>
            <span className="HorizontalLine"></span>
            <div>
                <Link to={ 
                    (!localStorage.getItem("Token")) ? "/signin/" : `/create-tutee-post/${email}/`
                }>
                    <img src={Activities} alt="" />
                    Activities
                </Link>
                <Link to={ 
                    (!localStorage.getItem("Token")) ? "/signin/" : `/create-tutor-post/${email}/`
                }>
                    <img src={Event} alt="" />
                    Event
                </Link>
            </div>
        </section>
    );
};

export default CreatePost;