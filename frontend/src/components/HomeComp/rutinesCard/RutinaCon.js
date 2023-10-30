import FreeIcon from "@/components/icons/FreeIcon";
import { TbPremiumRights } from "react-icons/tb";


export const  ROUTINECONTENT =  [{
    RoutineID: 1 ,
    type: {
      typeid: 0,
      src: <FreeIcon    /> ,
      alt: "free"
    }, 
    img: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Fortalecimiento con pesas",
    number: 6
  },{
    RoutineID: 2,
    type: {
      typeid: 1,
      src: <TbPremiumRights className='w-full text-2xl h-full flex justify-center items-center '/>,
      alt: "paga"
    }, 
    img: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Piernas y Gluteos",
    number: 22
  
  }
  
  ]