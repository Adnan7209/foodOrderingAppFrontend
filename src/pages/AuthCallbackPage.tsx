import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth0();
    const {createUser,} = useCreateMyUser();

    const appState = location.state;

    const hasCreatedUser = useRef(false);

    useEffect(()=>{
        if(user?.sub && user?.email && !hasCreatedUser.current){
            createUser({auth0Id:user.sub,email:user.email});
            hasCreatedUser.current=true;
          }
          navigate(appState?.returnTo||"/");

    },[createUser,navigate,user]);
  return (
    <div>Loading...</div>
  )
}

export default AuthCallbackPage