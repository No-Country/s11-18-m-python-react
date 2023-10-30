import { ROUTINECONTENT } from "../RutinesCard"

const CargarRutinas = () => {
  return fetch (ROUTINECONTENT)
  .then(res => res.json())
  .then(valores => valores[0])
}


async function ModalRoutineId({params}) {
  const {Routine_ID} = params;
  const datos = await CargarRutinas(Routine_ID)
  console.log(datos)
  return(
<>


</>
  )
   
  
}

export default ModalRoutineId