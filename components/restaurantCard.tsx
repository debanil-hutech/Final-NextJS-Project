const RestaurantCard= (props:any)=>{
    return (<>
    <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.restaurant}</h5>
                <div>
                    {props.date}
                </div>
            </div>
        </div>
    </>);
}

export default RestaurantCard;