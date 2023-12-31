import './App.css';
import Logo from './images/brandLogo.png';
import BreakfastMenu from './components/breakfastMenu';
import LunchMenu from './components/lunchMenu';
import DinnerMenu from './components/dinnerMenu';










function App() {
  return (
  <div> 
    <img className="logo" src={Logo} alt=""/>
    <h1 className='MenuTitle'>  Menu</h1>
    <BreakfastMenu />
    <LunchMenu />
    <DinnerMenu />

    
      
  </div>
  );
}

export default App;
