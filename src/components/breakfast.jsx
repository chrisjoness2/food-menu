

function Breakfast(props) {
    return(
        <div>
            <div className='itemDiv'>
                <h1 className='itemName'> {props.item} </h1>
                <img className='image' src={props.img} alt=""/> 
                <p className='itemDescription'> {props.itemDescription} </p>
            </div>
        </div>
        

    );
}

export default Breakfast;