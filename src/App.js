import { 
    Routes, 
    Route 
} from 'react-router-dom';
import ProfilePage from './pages/Profile';
import { 
    CreateTuteePostPage, 
    CreateTutorPostPage 
} from './pages/Post';
import {
    RoomPage,
    ReviewPage
} from './pages/Room';
import HomePage from './pages/Home';
import CheckoutPage from './pages/Checkout';
import SigninPage from './pages/Signin';
import ChatPage from './pages/Chat';
import ErrorPage from './pages/Error';



const App = () => {

    return (
        <>
            <Routes path="/">

                {/*****************************
                  * Start Content : @SigninPage 
                  *****************************/}
                <Route path="/signin/" element={ <SigninPage /> } />
                {/*****************************
                  * End Content : @SigninPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @ReviewPage 
                  *****************************/}
                <Route path="/review/" element={ <ReviewPage /> } />
                {/*****************************
                  * End Content : @ReviewPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @HomePage 
                  *****************************/}
                <Route index element={ <HomePage /> } />
                <Route path="/home/" element={ <HomePage /> } />
                <Route path="/home/:email/" element={ <HomePage /> } />
                {/*****************************
                  * End Content : @HomePage 
                  *****************************/}

                {/*****************************
                  * Start Content : @CheckoutPage 
                  *****************************/}
                <Route path="/checkout/:email" element={ <CheckoutPage /> } />
                {/*****************************
                  * End Content : @CheckoutPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @ProfilePage 
                  *****************************/}
                <Route path="/profile/:email/" element={ <ProfilePage /> } />
                {/*****************************
                  * End Content : @ProfilePage 
                  *****************************/}

                {/*****************************
                  * Start Content : @ChatPage 
                  *****************************/}
                <Route path="/chat/:email/" element={ <ChatPage /> } />
                {/*****************************
                  * End Content : @ChatPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @CreateTuteePostPage 
                  *****************************/}
                <Route path="/create-tutee-post/:email/" element={ <CreateTuteePostPage /> } />
                {/*****************************
                  * End Content : @CreateTuteePostPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @CreateTutorPostPage 
                  *****************************/}
                <Route path="/create-tutor-post/:email/" element={ <CreateTutorPostPage /> } />
                {/*****************************
                  * End Content : @CreateTutorPostPage 
                  *****************************/}

                {/*****************************
                  * Start Content : @RoomPage 
                  *****************************/}
                <Route path="/user-room/:fname/:lname/" element={ <RoomPage /> } />
                {/*****************************
                  * End Content : @RoomPage 
                  *****************************/}

                
                <Route path="*" element={ <ErrorPage /> } />  
               


            </Routes>
        </>
    );
};


export default App;