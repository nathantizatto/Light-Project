import React from 'react';
import ImageWoman from '../assets/ImageWoman.png';
import ImageMen from '../assets/ImageMen.png';
import '../components/Experience.css';

function Experience({ scrollToRef }) {
    const handleScroll = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='experience'>
            <div className='photosExperience'>
                <img src={ImageWoman} alt='Image of a woman wearing a mixed-reality glass'></img>
                <img src={ImageMen} alt='Image of a man wearing a mixed-reality glass'></img>
            </div>

            <div className='experienceText'>
                <h3>New Experience In Playing Game</h3>
                <label>You can try playing the game with a new style and of course a more real feel, like you are the main character in your game and adventure in this new digital world.</label>

                <div className='experienceButton'>
                    <button onClick={handleScroll}>Get It Now</button>
                </div>
            </div>
        </div>
    );
}

export default Experience;
