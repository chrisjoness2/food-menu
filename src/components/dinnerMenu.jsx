import ChickenAlfredo from '../images/chickenAlfredo.webp';
import ChickenPotPit from '../images/chickenPotPie.jpeg';
import Spaghetti from '../images/spaghetti.jpeg';
import SquashRisotto from '../images/squashRisotto.jpeg';
import FoodMenuTemplate from './foodMenuTemplate';






function DinnerMenu() {
    return(
        <>
        <div className='BreakfastLunchDinnerTitle'>
            <h1> Dinner </h1>
        </div>
        <div className="container">
            <FoodMenuTemplate 
            item="Bacon Cheeseburger"
            img={ChickenAlfredo}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Chicken Burger"
            img={Spaghetti}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Broccoli & Cheddar Soup"
            img={ChickenPotPit}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Fish N Chips"
            img={SquashRisotto}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Chicken Caesar Salad"
            img={SquashRisotto}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Club Sandwich"
            img={SquashRisotto}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />

        </div>
        </>
    )
};

export default DinnerMenu;