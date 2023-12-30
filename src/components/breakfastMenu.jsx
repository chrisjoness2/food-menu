import FoodMenuTemplate from './foodMenuTemplate';

import Pancakes from '../images/breakfastplate.jpeg';
import Waffles from '../images/waffles.jpeg';
import Vegan from '../images/vegan.jpeg';
import Omelette from '../images/omelette.jpeg';
import FrenchToast from '../images/frenchToast.jpeg';
import Burrito from '../images/burrito.jpeg';
import Benedict from '../images/eggsbenedict.avif';

function BreakfastMenu(){
    return(
        <>
       <div className='BreakfastLunchDinnerTitle'>
            <h1> Breakfast </h1> <h3> 8am-10:30am</h3>
        </div>
        
    <div className="container"> 
        
          <FoodMenuTemplate 
          item="Pancake Combo"
          img={Pancakes} alt=""
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />
          <FoodMenuTemplate 
          item="Waffle Combo"
          img={Waffles}
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />
          <FoodMenuTemplate 
          item="French Toast Combo"
          img={FrenchToast}
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />
          <FoodMenuTemplate 
          item="Omelette"
          img={Omelette}
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />
          <FoodMenuTemplate 
          item="Vegan Sandwich"
          img={Vegan}
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />
          <FoodMenuTemplate 
          item="Breakfast Burrito"
          img={Burrito}
          description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
          and side of french fries"
          />

          
    
    </div>
        <div className='fanFavDiv'>
            <div className='fanFavTxt'>
                <p> Egg Benedict </p> <h6> Toasted English muffin with Canadian bacon two poached eggs,
                    and hollandaise sauce. This is our most ordered breakfast! </h6>
            </div>
            <div className='fanFavImgDiv'>
                <img className='fanFavImg' src={Benedict} alt=""/>
            </div>
        </div>
</>
    )
};

export default BreakfastMenu;