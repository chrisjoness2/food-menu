import BreakfastProp from '../components/breakfastProps';
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
       
        
    <div className="container"> 
        <div className='breakfastTitle'>
            <h1> Breakfast </h1>
        </div>
          <BreakfastProp 
          item="Pancake Combo"
          img={Pancakes} alt=""
          
          />
          <BreakfastProp 
          item="Waffle Combo"
          img={Waffles}
          />
          <BreakfastProp 
          item="French Toast Combo"
          img={FrenchToast}
          />
          
          <BreakfastProp 
          item="Omelette"
          img={Omelette}
          />
          <BreakfastProp 
          item="Vegan Sandwich"
          img={Vegan}
          />
          <BreakfastProp 
          item="Breakfast Burrito"
          img={Burrito}
          />
          
    
    </div>
        <div className='fanFavDiv'>
            <div className='fanFavTxt'>
                <p> Egg Benedict: Our most ordered breakfast! </p>
            </div>
            <div className='fanFavImgDiv'>
                <img className='fanFavImg' src={Benedict} alt=""/>
            </div>
        </div>
</>
    )
};

export default BreakfastMenu;