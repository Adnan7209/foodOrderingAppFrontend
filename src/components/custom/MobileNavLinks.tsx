import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <NavLink
        to="/manage-restaurant"
        className="font-bold hover:text-orange-500"
      >
        Manage Restaurant
      </NavLink>
      <NavLink to="/order-status" className="font-bold hover:text-orange-500">
        Order Status
      </NavLink>
      <NavLink
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </NavLink>
      <Button
        className="flex items-center px-3 font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
