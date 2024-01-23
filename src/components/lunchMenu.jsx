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
        <h1 id="Lunch"> Lunch </h1>
        <div className="container">
            <FoodMenuTemplate 
            item="Bacon Cheeseburger"
            img={BaconCheeseBurger}
            description="Our 100% beef bacon cheeseburger comes with lettuce, pickle, tomato, onion
            and side of french fries"
            price="9.99"
            />
            <FoodMenuTemplate 
            item="Chicken Burger"
            img={ChickenBurger}
            description="Chicken burger with lettuce, mayo, pickles and side of french fries"
            price="8.99"
            />
            <FoodMenuTemplate 
            item="Broccoli & Cheddar Soup"
            img={BroccoliSoup}
            description="An caramelized onion and garlic-based and thickened with veggie stock, broccoli, and carrots"
            price="5.99"
            />
            <FoodMenuTemplate 
            item="Fish N Chips"
            img={FishNChips}
            description="Freshly caught breaded and baked fish served with a side of french fries"
            price="7.99"
            />
            <FoodMenuTemplate 
            item="Chicken Caesar Salad"
            img={ChickenSalad}
            description="Salad with tomato, croutons, and grilled chicken with your choice of warm or cold caesar
            dressing"
            price="6.99"
            />
            <FoodMenuTemplate 
            item="Club Sandwich"
            img={ClubSandwich}
            description="A sandwich consisting of bread, sliced cooked chicken, fried bacon, lettuce, tomato, and mayonnaise"
            price="8.99"
            />

        </div>
       

        </>
    )
};

export default LunchMenu;