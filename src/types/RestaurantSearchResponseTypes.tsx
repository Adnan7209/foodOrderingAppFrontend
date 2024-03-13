import { RestaurantType } from "./RestaurantTypes";

export type RestaurantSearchResponseType = {
    data:RestaurantType[];
    pagination:{
        total:number;
        page:number;
        pages:number;
    }
}