
function BreakfastProp(props) {
    return(
        <>
        <div>
            <div>
                <h1 className='itemName'> {props.item} </h1>
                <img className='image' src={props.img} alt=""/> 
            </div>
        </div>
        </>
    );
}

export default BreakfastProp;