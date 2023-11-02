
const CARDSCONTENT = [
    {
        Subs_id: 1,
        title: "Mensual",
        subtitle: "3800",
        content: {
            param1: "acceso a las mejores rutinas pagas sin costos adicionales",
            param2: "descuento en rutinas destacadas",
            param3: "beneficios fuera de la app"
        }
    },
    {
        Subs_id: 2,
        title: "anual",
        subtitle: "41000",
        content: {
            param1: "acceso a las mejores rutinas pagas sin costos adicionales",
            param2: "descuento en rutinas destacadas",
            param3: "beneficios fuera de la app"
        }
    },
]


export default function CardMenAn () {
    return (
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-4 mt-4 ">
        <div className="flex flex-nowrap">

        
        {CARDSCONTENT.map((cards) => {
            return(
<div key={cards.Subs_id} className="bg-Negro border-2 border-Turquesa/600 rounded-md text-Blanco flex  flex-col justify-center mx-2 items-center w-[340px] h-fit  py-5">
            <h4 className="text-Turquesa/600 first-letter:uppercase font-semibold text-center text-3xl mt-1">{cards.title}</h4>
            <span className="text-Blanco text-xl text-center  ">${cards.subtitle}</span>        
            
            <ul className="w-2/3 list-disc my-4 first-letter:uppercase text-lg" >
                
                <li className="first-letter:uppercase my-2">{cards.content.param1}</li>
                <li className="first-letter:uppercase my-2">{cards.content.param2}</li>
                <li className="first-letter:uppercase my-2">{cards.content.param3}</li>
               
            </ul>

<button className="first-letter:uppercase py-2 px-4 bg-Turquesa/600 text-black rounded-md font-semibold text-lg"> comenzar ahora</button>

            </div>
            )
        })}
        </div>
        </div>
        )
    }
   
