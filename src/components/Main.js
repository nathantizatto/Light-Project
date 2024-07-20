import React from 'react';
import '../components/Main.css'
import people from '../assets/people.png'
import photo from '../assets/Group 23.png'

function Main({ scrollToRef }) {
    const handleScroll = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='main'>
            <div className='mainText'>
                <h2>Let's Explore Three-Dimensional visual</h2>
                <label>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</label>

                <div className='buttons'>
                    <button onClick={handleScroll}>Get it now</button>
                    <a onClick={handleScroll}>Explore device</a>
                </div>

                <div className='people'>
                    <img src={people} alt='Photo of happy people'></img>
                    <label>° 400k people online</label>
                </div>
            </div>

            <div className='mainPhoto'>
                <img src={photo} alt='A woman wearing a mixed-reality glass.'></img>
            </div>
        </div>
    );
}

export default Main;
