import React from 'react';
import Hands from '../assets/Group 22.png';
import '../components/Explore.css';
import emailjs from '@emailjs/browser'

function Explore({ scrollToRef }) {

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
        .then((response) => {
            alert("Success! Thank you so much :)")
        }).catch((error) => {
            alert("Type the correct e-mail, please!");
        })
    }
    return (
        <div className='explore' ref={scrollToRef}>
            <div className='exploreText'>
                <h2>Explore product in a new way</h2>
                <label>We specialize in creating visual identities for products and branda in your company.</label>

                <form className='form' onSubmit={sendEmail}>
                    <input type='email' placeholder='Your e-mail' id='emaiL' name='userEmail'/>
                    <button type='submit' id='btn'>Start</button>
                </form>
            </div>

            <div className='exploreImage'>
                <img src={Hands} alt='Two Hands'></img>
            </div>
        </div>
    );
}

export default Explore;
