import { MenuItemType } from "@/types/RestaurantTypes";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type PropsType = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: PropsType) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">Rs.{menuItem.price}</CardContent>
    </Card>
  );
};

export default MenuItem;
