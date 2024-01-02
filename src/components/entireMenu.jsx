import Logo from '../images/brandLogo.png';
import BreakfastMenu from '../components/breakfastMenu';
import LunchMenu from '../components/lunchMenu';
import DinnerMenu from '../components/dinnerMenu';
import Navbar from './navbar';
import '../App.css';



function EntireMenu() {
    return (
        <>
        <Navbar />
        <img className="logo" src={Logo} alt=""/>
        <h1 className='MenuTitle'>  Menu</h1>
        
        <BreakfastMenu />
        <LunchMenu />
        <DinnerMenu />
        </>
    )
};

export default EntireMenu;