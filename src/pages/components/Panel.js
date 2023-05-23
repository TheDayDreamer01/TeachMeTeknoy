import { Profile } from './Constants';

export const EventsJoined = () => {
    return (
        <section className="event-joined">
            <div className="__header">
                <p>Event Joined</p>
            </div>
            <div className="__content">

                {/* <div className="__event">
                    <Profile />
                    <div className="__event-detail">
                        <h4>C Programming tutorial</h4>
                        <p>@5:30 PM 12/08/12</p>
                    </div>
                </div> */}

                <div className="Spacer"></div>

            </div>
        </section>
    );
};

export const TopTutor = () => {
    return (
        <section className="event-joined">
            <div className="__header">
                <p>Top Tutor</p>
            </div>
            <div className="__content">
{/* 
                <div className="__event">
                    <Profile />
                </div> */}

                <div className="Spacer"></div>

            </div>
        </section>
    );
};
