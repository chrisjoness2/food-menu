import '../App.css';
import Logo from '../images/brandLogo.png';



function Navbar(){
    return(
        <div id='TopOfMenu'>
            <nav id='navbar'>

                
                <ul>            
                    <li>  <img className="logo" src={Logo} alt=""/> </li>
                    <li>  <a href="#Breakfast">Breakfast </a> </li>
                    <li>  <a href="#Lunch">Lunch </a> </li>
                    <li>  <a href="#Dinner">Dinner </a> </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;