import { useLocation } from 'react-router-dom';
import Error404 from '../static/svg/404.svg';

const ErrorPage = () => {

    const location = useLocation();

    const GoBack = () => window.history.back();

    return(  
        <section className="error-page">
            <div className="__background"></div>
            <div className="__error-message">
                <img src={Error404} alt="" />
                <div className="__message">
                    <h1>Page Not Found</h1>
                    <p>www.teachmeteknoy.com<span>{location.pathname}</span></p>

                    <button onClick={ GoBack }>Go Back!</button>
                </div>
            </div>
        </section>
    );
}; 

export default ErrorPage;