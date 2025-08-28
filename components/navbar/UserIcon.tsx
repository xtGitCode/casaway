import { FaCircleUser } from "react-icons/fa6"
import { fetchProfileImage } from "@/utils/actions"

async function UserIcon() {   
  const profileImage = await fetchProfileImage()
  if (profileImage) {
    return (
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-6 h-6 object-cover rounded-full"
      />
    )
  }
  return (
    <FaCircleUser className="w-6 h-6 bg-primary rounded-full text-white"/>
  )
}

export default UserIcon
