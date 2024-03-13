import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router";

const SearchPage = () => {
  const { city } = useParams();
  const {results} = useSearchRestaurants(city);
  
  return <span>User serached for {city} <span>
    {
        results?.data.map((restaurant)=><span>found - {restaurant.restaurantName},{restaurant.city}</span>)
    }
    </span></span>;
};

export default SearchPage;
