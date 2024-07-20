import logo from '../assets/Light.svg'
import './NavBar.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


function NavBar(){


    return(
        <div className='nav'>

            <div className='img'>
               <a href='#'><img src={logo} alt='Logotipo da empresa Light'></img></a>
            </div>

           

        </div>   

    )
}


export default NavBar