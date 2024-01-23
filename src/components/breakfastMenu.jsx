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
       <div id="Breakfast">
            <h1> Breakfast </h1> <h3> (All day breakfast)</h3>
        </div>
        
    <div className="container"> 
        
          <FoodMenuTemplate 
          item="Pancake Combo"
          img={Pancakes} alt=""
          description="4 buttermilk pancakes with warm mapple syrup served with 2 eggs, bacon, and side of toast"
          price="8.99"
          />
          <FoodMenuTemplate 
          item="Waffle Combo"
          img={Waffles}
          description="3 buttermilk waffles with warm mapple syrup served with 2 eggs of your choice
          and 2 sides of your choice between bacon, sausage and ham"
          price="9.99"
          />
          <FoodMenuTemplate 
          item="French Toast Combo"
          img={FrenchToast}
          description="3 french toast with warm mapple syrup served with 2 eggs of your choice
          and 2 sides of your choice between bacon, sausage and ham"
          price="8.99"
          />
          <FoodMenuTemplate 
          item="Omelette"
          img={Omelette}
          description="Omelette with any vegetables and meats of your choice cooked with 3 eggs"
          price="6.99"
          />
          <FoodMenuTemplate 
          item="Vegan Sandwich"
          img={Vegan}
          description="Creamy spinach and a tangy white bean spread contrast beautifully with the juicy tomato slices"
          price="7.99"
          />
          <FoodMenuTemplate 
          item="Breakfast Burrito"
          img={Burrito}
          description="Burrito served with eggs, avocado, red pepper, cheese and your choice between 
          chicken and beef"
          price="8.99"
          />

          
    
    </div>
        <div className='fanFavDiv'>
            <div className='fanFavTxt'>
                <p> Eggs Benedict </p> 
                <h6> Toasted English muffin with Canadian bacon two poached eggs,
                    and hollandaise sauce  </h6>
                <span className='mostOrderedTxt'> Our most ordered breakfast!</span>
            </div>
            <div className='fanFavImgDiv'>
                <img className='fanFavImg' src={Benedict} alt=""/>
            </div>
        </div>
</>
    )
};

export default BreakfastMenu;