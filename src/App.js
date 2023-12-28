import './App.css';
import Logo from './images/brandLogo.png';
import BreakfastMenu from './components/breakfastMenu';










function App() {
  return (
  <div> 
    <img className="logo" src={Logo} alt=""/>
    <h1 className='MenuTitle'>  Menu</h1>
    <BreakfastMenu />
    
      
  </div>
  );
}

export default App;
