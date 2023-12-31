
function FoodMenuTemplate(props) {
    return(
        <>
        <div className="entireItemDiv">
            <div>
                <img className='image' src={props.img} alt=""/> 
                <h1 className='itemName'> {props.item} </h1>
                <p className="itemDescription"> {props.description} </p>
                <hr />
            </div>
        </div>
        </>
    );
}

export default FoodMenuTemplate;