import FreeIcon from "@/components/icons/FreeIcon";
import { TbPremiumRights } from "react-icons/tb";


export const  ROUTINECONTENT =  [{
    RoutineID: 1 ,
    type: {
      typeid: 0,
      src: <FreeIcon    /> ,
      alt: "free"
    }, 
    img: "/images/rutinasfree.png",
    title: "Fortalecimiento con pesas",
    number: 6
  },
  {
    RoutineID: 2,
    type: {
      typeid: 1,
      src: <TbPremiumRights className='w-full text-2xl h-full flex justify-center items-center '/>,
      alt: "paga"
    }, 
    img: "/images/rutinapaga.png",
    title: "Piernas y Gluteos",
    number: 22
  
  }
  
  ]