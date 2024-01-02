import FoodMenuTemplate from './foodMenuTemplate';
import ChickenAlfredo from '../images/chickenAlfredo.webp';
import ChickenPotPit from '../images/chickenPotPie.jpeg';
import Spaghetti from '../images/spaghetti.jpeg';
import GnocchiMeatball from '../images/GnocchiMeatball.jpeg';
import Salmon from '../images/honeyglazedSalmon.jpeg';
import VeganPasta from '../images/veganPasta.webp';









function DinnerMenu() {
    return(
        <>
        <div className='BreakfastLunchDinnerTitle'>
            <h1 id="Dinner"> Dinner </h1>
        </div>
        <div className="container">
            <FoodMenuTemplate 
            item="Chicken Alfredo"
            img={ChickenAlfredo}
            description="White, creamy sauce with our handmade fettuccine pasta and grilled chicken"
            price="7.99"
            />
            <FoodMenuTemplate 
            item="Spaghetti Bolognese"
            img={Spaghetti}
            description="Minced beef combined with red sauce, basil and handmade spaghetti pasta"
            price="8.99"
            />
            <FoodMenuTemplate 
            item="Chicken Pot Pie"
            img={ChickenPotPit}
            description="Classic chicken pot pie with flaky buttery crust and chicken with mix of vegetables"
            price="6.99"
            />
            <FoodMenuTemplate 
            item="Gnocchi and Meatball"
            img={GnocchiMeatball}
            description="Fluffy gnocchi and browned meatballs cooked in a creamy, herby, 
            tomato sauce with slices of stringy mozzarella"
            price="9.99"
            />
            <FoodMenuTemplate 
            item="Honey Glazed Salmon"
            img={Salmon}
            description="Perfectly seasoned, quickly pan seared and basted in an incredible honey, 
            garlic sauce infused with a little soy sauce and citrus,"
            price="6.99"
            />
            <FoodMenuTemplate 
            item="Vegan Pasta"
            img={VeganPasta}
            description="Pasta served with basil leaves served with our special recipe creamy, red sauce"
            price="5.99"
            />

        </div>
        </>
    )
};

export default DinnerMenu;