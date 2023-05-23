import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Subject = ({email}) => {
    
    const navigate = useNavigate();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        try {
            axios({
                method : "get",
                url : "/api/get/all-subjects/"
            }).then( (response) => {
                setSubjects(response.data);
            });
                
        } catch (e){
            console.log(e.Message);
        }
    }, []);


    const HandleClick = () => {
        if (email === undefined){
            navigate("/signin/");
        }
    };

    return (
        <section className="subject">
            <div className="__title">
                <h3>Browse Subject</h3>
            </div>
            <h4>All</h4>
            <div className="__subject">
                {
                   subjects.map((subject) => {
                        return (
                            <div key={subject.id} className="__follow-subject">
                                <p >{subject.name}</p>
                                <button onClick={ HandleClick }>Follow</button>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};


export default Subject;