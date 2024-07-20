import Icon1 from '../assets/Icon1.svg'
import Icon2 from '../assets/Icon2.svg'
import Icon3 from '../assets/Icon3.svg'
import Icon4 from '../assets/Icon4.svg'
import '../components/Values.css'

function Values(){
    return(
        <div className='values'>
            <div className='valuesText'>
                <h2>Our company values culture</h2>
                <label>We specialize in creating visual identities for products and branda in your company.</label>
            </div>

            <div className='textIcons'>
                <div className='icon'>
                    <img src={Icon1} alt='Be Sincere'></img>
                    <label>Be Sincere</label>
                </div>

                <div className='icon'>
                    <img src={Icon2} alt='Stronger Together'></img>
                    <label>Stronger Together</label>
                </div>

                <div className='icon'>
                    <img src={Icon3} alt='Keep It Simple'></img>
                    <label>Keep It Simple</label>
                </div>

                <div className='icon'>
                    <img src={Icon4} alt='Take Intelligent Risks'></img>
                    <label>Take Intelligent Risks</label>
                </div>
            </div>
        </div>
    )
}



export default Values