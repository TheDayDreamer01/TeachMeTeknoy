import Person1 from '../../static/svg/Person1.svg';
import Toggle from '../../static/svg/Toggle.svg';
import Pay from '../../static/svg/Pay.svg';
import Phone from '../../static/svg/Phone.svg';
import Person2 from '../../static/svg/Person2.svg';
import Proof from '../../static/svg/Proof.svg';

const Summary = () => {
    return (
        <section className="summary-container">
            <div className="header">
                <img src={Person1} alt="" />
                <p>Lirae Que Data</p>
            </div>
            <div className="content">
                <div className='list'>
                    <div className='item-container'>
                        <div className='item'>
                            <img src={Toggle} alt="" />
                            <p>C Program Workshop</p>
                            <p className='price'>Php 120</p>
                        </div>
                        <div className='item'>
                            <img src={Toggle} alt="" />
                            <p>C Program Workshop</p>
                            <p className='price'>Php 120</p>
                        </div>
                        <div className='item'>
                            <img src={Toggle} alt="" />
                            <p>C Program Workshop</p>
                            <p className='price'>Php 120</p>
                        </div>
                        <div className='item'>
                            <img src={Toggle} alt="" />
                            <p>C Program Workshop</p>
                            <p className='price'>Php 120</p>
                        </div>
                        <div className='item'>
                            <img src={Toggle} alt="" />
                            <p>C Program Workshop</p>
                            <p className='price'>Php 120</p>
                        </div>
                    </div>
                    <hr />
                    <div className='total'>
                        <p>Total: <span className='total-price'>Php 320</span> </p>


                    </div>

                </div>
            </div>

            <div className='Payment-methods'>
                <div className='title'>
                    <p>Payment Details</p>
                </div>
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
            <div className='proof'>

                <a><img src={Proof} alt="" />
                    Add Proof of Payment</a>
            </div>

        </section>
    )
}

export default Summary;