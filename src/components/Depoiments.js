import '../components/Depoiments.css'
import Star from '../assets/starstar.svg'
import CardPhoto from '../assets/cardphoto.png'


function Depoiments() {


    return (
        <div className='depoiments'>
            <div className='text'>
                <h2>What our clients say</h2>
                <label>See what our customer say about us. It really matter for us. How good or bad
                    we will make ir for evaluation to make EhyalLive better.</label>

            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='star'>
                        <img src={Star} alt='Star logo'></img>
                    </div>

                    <div className='cardText'>
                        <label>“I know in real-time where the money is spent,and
                            I don't have to lend out the company's credit card
                            anymore. What a relief!”

                        </label>
                    </div>

                    <div className='cardBottom'>
                        <img src={CardPhoto} alt='Person photo.'></img>

                        <div className='name'>
                            <h4>Vani Pandey</h4>
                        </div>
                    </div>
                </div>

                


                <div className='card'>
                    <div className='star'>
                        <img src={Star} alt='Star logo'></img>
                    </div>

                    <div className='cardText'>
                        <label>“I know in real-time where the money is spent,and
                            I don't have to lend out the company's credit card
                            anymore. What a relief!”

                        </label>
                    </div>

                    <div className='cardBottom'>
                        <img src={CardPhoto} alt='Person photo.'></img>

                        <div className='name'>
                            <h4>Vani Pandey</h4>
                        </div>
                    </div>
                </div>



                <div className='card'>
                    <div className='star'>
                        <img src={Star} alt='Star logo'></img>
                    </div>

                    <div className='cardText'>
                        <label>“I know in real-time where the money is spent,and
                            I don't have to lend out the company's credit card
                            anymore. What a relief!”

                        </label>
                    </div>

                    <div className='cardBottom'>
                        <img src={CardPhoto} alt='Person photo.'></img>

                        <div className='name'>
                            <h4>Vani Pandey</h4>  
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Depoiments