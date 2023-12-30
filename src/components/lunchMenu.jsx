import FoodMenuTemplate from "./foodMenuTemplate";
import BaconCheeseBurger from '../images/baconcheeseburger.jpeg'
import BroccoliSoup from '../images/broccolisoup.webp'
import ChickenBurger from '../images/chickenBurger.jpeg'
import FishNChips from '../images/fishnchips.jpeg'
import ChickenSalad from '../images/chickenSalad.jpeg'
import ClubSandwich from '../images/clubsandwich.jpeg'






function LunchMenu (){
    return (
        <>
        <div className="container">
            <FoodMenuTemplate 
            item="Bacon Cheeseburger"
            img={BaconCheeseBurger}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            />
            <FoodMenuTemplate 
            item="Chicken Burger"
            img={ChickenBurger}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"/>
            <FoodMenuTemplate 
            item="Broccoli & Cheddar Soup"
            img={BroccoliSoup}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"/>
            <FoodMenuTemplate 
            item="Fish N Chips"
            img={FishNChips}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"/>
            <FoodMenuTemplate 
            item="Chicken Caesar Salad"
            img={ChickenSalad}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"/>
            <FoodMenuTemplate 
            item="Club Sandwich"
            img={ClubSandwich}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"/>

        </div>
       

        </>
    )
};

export default LunchMenu;