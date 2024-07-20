import '../components/Headsets.css'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'
import Image4 from '../assets/Image4.png'


function Headsets(){


    return(

        <div className='headsets'>
            <h2>Mixed Reality Headsets</h2>

            <div className='photos'>
                <img src={Image1} alt='Metaverse'></img>
                <img src={Image2} alt='Alot'></img>
                <img src={Image3} alt='HoloLens'></img>
                <img src={Image4} alt='Tpcastt'></img>
            </div>
        </div>
    )
}


export default Headsets