import './App.css';
import Breakfast from './components/breakfast';
import BreakfastPlate from './images/breakfastplate.jpeg';
import Waffles from './images/waffles.jpeg';
import Vegan from './images/vegan.jpeg';
import Omelette from './images/omelette.jpeg';
import FrenchToast from './images/frenchToast.jpeg';
import Burrito from './images/burrito.jpeg';






function App() {
  return (
  <div> 
    <h1 className='breakfastMenuTitle'> Breakfast Menu</h1>
    <div className="container">
          <Breakfast 
          item="Pancake Combo"
          img={BreakfastPlate}
          itemDescription="Waffle and eggs"/>
          <Breakfast 
          item="Waffle Combo"
          img={Waffles}
          itemDescription="Waffle and eggs"/>
          <Breakfast 
          item="Vegan Sandwich"
          img={Vegan}
          itemDescription="Waffle and eggs"/>
          <Breakfast 
          item="Omelette"
          img={Omelette}
          itemDescription="Waffle and eggs"/>
          <Breakfast 
          item="French Toast Combo"
          img={FrenchToast}
          itemDescription="Waffle and eggs"/>
          <Breakfast 
          item="Breakfast Burrito"
          img={Burrito}
          itemDescription="Waffle and eggs"/>
    </div>
         

  </div>
  );
}

export default App;
