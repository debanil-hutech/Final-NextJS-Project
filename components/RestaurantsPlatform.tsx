import { GetStaticPropsContext } from 'next';
import APICallClass from '../handlers/baseFetch';
import RestaurantCard from './restaurantCard';
function RestaurantsPlatform(props:any){
    
    return <>
    <div className="container">
        {props.restaurant.map((element:any)=>(
            <RestaurantCard key={element._id} restaurant={element.Restaurant} date={element.Date} />
        ))}
    
    </div>
    </>;
}



export default RestaurantsPlatform;