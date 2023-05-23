import NavBar from "./components/Navbar";
import Chat from '../static/svg/Chat.svg';
import Toggle from '../static/svg/Toggle.svg';
import Person1 from '../static/svg/Person1.svg';
import Person2 from '../static/svg/Person2.svg';
import Pay from '../static/svg/Pay.svg';
import Phone from '../static/svg/Phone.svg';
import Proof from '../static/svg/Proof.svg';
import arrowLeft from '../static/svg/ArrowLeft.svg';
import arrowRight from '../static/svg/ArrowRight.svg';


const CheckoutPage = () => {
    return (
        <section className="main">
            <NavBar />
            <div className="background-half __body">
                <div className="left">
                    <div className="checkout-title">
                        <h1>Checkout</h1>
                        <p>Tutoring Sessions Cart</p>
                    </div>
                    <div className="cart">
                        <div className="cart-container">
                            <div className='body'>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>


                                    </div>
                                </div>
                                 <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>
                                    </div>
                                </div>
                                 <div className="item">
                                    <div className="workshop-title">
                                        <input type="checkbox" />
                                        <h6> C Program Workshop</h6>

                                    </div>
                                    <div className="tutor-price">
                                        <p className='tutor'>Khess Clark Nino Sereno</p>
                                        <p className='line'></p>
                                        <img src={Chat} alt="" />
                                        <a className='chat'>chat now</a>
                                        <p className='price'>Php 120</p>


                                    </div>
                                </div>
                            
                            </div>
                            <hr />
                            <div className='total'>
                                <p>TOTAL:
                                    <span className='total-price'>Php 120</span>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="payment-methods">
                        <div className="container">
                            <p>PAYMENT METHODS</p>
                            <div className="__container">
                            <div className="row1">

                                <div class="op Pay">
                                    <label>
                                        <input type="checkbox" value="1" /><span>Gcash</span>
                                    </label>
                                </div>
                                <div class="op Pay">
                                    <label>
                                        <input type="checkbox" value="1" /><span>GrabPay</span>
                                    </label>
                                </div>
                            </div>

                            <div className="row2">
                                <div class="op Pay">
                                    <label>
                                        <input type="checkbox" value="1" /><span>PayMaya</span>
                                    </label>
                                </div>
                                <div class="op Pay">
                                    <label>
                                        <input type="checkbox" value="1" /><span>PayPal</span>
                                    </label>
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                        <div className='button'>
                            <button type='button' className='submit'>Pay Now</button>
                        </div>
                </div>


                <div className="right">
                    <div className="title ">
                        <h1>Summary</h1>
                    </div>
                    <div className="tutor-summary"> 
                        <section className="summary-container">
                            <div className="header">
                                <img src={Person1} alt="" />
                                <p>Lirae Que Data</p>
                            </div>
                            <div className="content">
                                <div className='list'>
                                    <div className='item-container'>
                                        <div className='item'>
                                            <div className="group"> 
                                            <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>Hello</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                        <div className='item'>
                                            <div className="group">
                                                <img src={Toggle} alt="" />
                                                <p>I Don't Want to Get Hurt, so I'll Max Out My Defense</p>

                                            </div>
                                            <p className='price'>Php 120</p>
                                        </div>
                                     
                                       
                                       
                                    </div>
                                    <hr />
                                    <div className='total'>
                                        <p>Total: <span className='total-price'>Php 320</span> </p>
                                    </div>

                                </div>
                            </div>

                            <div className='payment-methods'>
                                <div className='title'>
                                    <p>Payment Details</p>
                                </div>
                                <div className="vertical-line"></div>
                            <div className="group">
                                <div className='details'>
                                    <div className='channel'>
                                        <img src={Pay} alt="" />
                                        <p className='account'>Payment Channel :</p>
                                        <p className='info'>Gcash</p>
                                    </div>
                                    <div className='channel'>
                                        <img src={Person2} alt="" />
                                        <p className='account'>Account Name : </p>
                                        <p className='info'>Lirae Que Data</p>
                                    </div>
                                    <div className='channel'>
                                        <img src={Phone} alt="" />
                                        <p className='account'>Account Number :</p>
                                        <p className='info'>09123456789</p>
                                    </div>
                                </div>
                            </div> 

                            </div>
                            <div className='proof'>
                                <a><img src={Proof} alt="" />
                                    Add Proof of Payment</a>
                            </div>
                            <div className="summary-navigate">
                                <button>
                                <img src={arrowLeft} alt="" />
                                </button>
                                <button>
                                <img src={arrowRight}
                                    alt="" />
                                </button>
                            </div>
                            <hr />
                        </section>
                        
                    </div>
                    <div className="payment-status">
                        <section className="container">
                            <div className="header">
                                <p>PAYMENT STATUS</p>
                            </div>
                            <div className="content">
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                                <div className="items">
                                    <div className='group'>
                                        <img src={Toggle} alt="" />
                                        <p className="event-name">I Don't Want to Get Hurt, so I'll Max Out My Defense</p>
                                    </div>
                                    <p className="status-confirmed">Confirmed</p>
                                    <a className="meeting-link">Meeting Link</a>
                                </div>
                            </div>
                        </section>

                    </div>
                </div> 
                
            </div>
        </section>
    );
};

export default CheckoutPage;