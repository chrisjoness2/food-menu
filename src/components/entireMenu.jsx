import BreakfastMenu from '../components/breakfastMenu';
import LunchMenu from '../components/lunchMenu';
import DinnerMenu from '../components/dinnerMenu';
import Navbar from './navbar';
import Footer from './footer';
import '../App.css';



function EntireMenu() {
    return (
        <>

        
        <Navbar />
        <h1 className='MenuTitle'>  Menu</h1>
        
        <BreakfastMenu />
        <LunchMenu />
        <DinnerMenu />
        <Footer />
        
        </>
    )
};

export default EntireMenu;