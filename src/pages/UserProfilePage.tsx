import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi"
import UserProfileForm from "@/forms/userProfileForms/UserProfileForm"


const UserProfilePage = () => {
    const {currentUser, isLoading:isGetLoading} = useGetMyUser();
    const {updateUser,isLoading:isUpdateLoading} = useUpdateMyUser();

    if(isGetLoading){
        return <span className=" animate-pulse text-5xl ">Loading...</span>
    }

  return (
    <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
  )
}

export default UserProfilePage