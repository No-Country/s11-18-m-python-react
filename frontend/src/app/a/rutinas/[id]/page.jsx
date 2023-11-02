import ContentText from '@/components/HomeComp/rutinesCard/ContentTItle/ContentText'
import ButtonDetalles from '@/components/HomeComp/rutinesCard/DetallesRutinas/ButtonDetalles'
import Image from 'next/image'
import React from 'react'
import { BsBookmarks, BsShare, BsStar } from 'react-icons/bs'
import { PiShareFatBold } from 'react-icons/pi'
import { TbPremiumRights } from 'react-icons/tb'

const  fetchRoutines = async  (id) => {
  return await fetch(`http://ec2-3-101-14-170.us-west-1.compute.amazonaws.com/routine/routine/${id}/`, { cache: 'no-store'   }) .then (res => res.json())
};


 async function RutinePage({ params}) {

   const { id }  = params
  const rutinas =  await fetchRoutines(id)
  const userNames = {
    1: 'Juan Pablo',
    2: 'Lucas Simoes',
    3: 'Agustin Ribotta',
    4: 'Evenlyn Ariani',
    5: 'Fabricio Reyna',
    6: 'Eduardo Vega',
  };
  
console.log(rutinas.reating)
const Comentario = rutinas.comment
const ratings = rutinas.reating
const Sets = rutinas.routine_sets
const day_set0 = rutinas.routine_sets[0].day_set
  return (
  
     
        <div className='p-4'> 
        <section className='h-fit w-full ' >
          <div className='  rounded-lg h-[240px] bg-cover bg-[url("https://images.pexels.com/photos/6303730/pexels-photo-6303730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] relative'>
        <span className='text-dark flex justify-evenlly bg-Turquesa/600 items-center px-2 py-1  w-fit rounded-xl absolute bottom-2 left-2'> <BsStar className='mr-1 '/> {rutinas.average_reating}</span>
        <span className= {`bg-cover bg-[url()]  rounded-full w-2 h-4 absolute bottom-[-28px] border-2 border-black right-6 p-6`}></span>

          </div>
<div className='my-4'>
          <h2 className='text-white font-medium text-2xl'>{rutinas.title} </h2>
            <span className='text-Grises/300 text-lg ' >Por {userNames[rutinas.id_user]}</span>

</div>
<div className='mt-3 flex items-center justify-evenly '>
 <ButtonDetalles is_paid={rutinas.is_paid}/>
  <span className='border-2 border-Turquesa/600 rounded-md w-1/5 px-4 py-2 mx-1 flex justify-center items-center '>
    <BsBookmarks className='text-xl w-5 h-7  text-white ' /> 
   </span> 
   <span className='border-2 border-Turquesa/600 rounded-md w-1/5 px-4 py-2 mx-1 flex justify-center items-center '>
    <PiShareFatBold className='text-xl w-5 h-7  text-white ' /> 
   </span> 
</div>
        </section>
    <ContentText descriptionaAPI={rutinas.description}  comment={
      
      <>
      {
        Comentario.map ((comment) => (
        <div key={comment.id}>
          <div className='my-2  flex  flex-col h-fit justify-start '>
          <div className='text-2xl text-Turquesa/600 flex justify-evenly w-full '> 
          <span className='mr-4'>{userNames[comment.id_user]}  </span> 
          
          <span className=' text-dark flex justify-evenlly bg-Turquesa/600 items-center px-2 py-1  w-fit rounded-xl text-Negro  bottom-2 left-2'> <BsStar className='mr-2'/> {ratings.map((reating) => (
            <div key={reating.id}>
            {reating.rating <= 51 ?  reating.id_routine   : ""}
            
            </div>
            ))}  </span> 
          
          </div>
          <span className='text-lg text-Grises/200'>Hace mas de {comment.id_user * 2} horas</span>
  
          </div>
          <div className='py-2 px-2 rounded-lg text-Grises/300 font-semibold shadow-xl border-2 border-Grises/100'>
  
          {comment.text   }
  
          </div>
        </div>
      ))

      }
      {
ratings.map((comment) => (
  <div key={comment.id}>
          <div className='my-2  flex  flex-col h-fit justify-start '>
          <div className='text-2xl text-Turquesa/600 flex justify-evenly w-full '> 
          <span className='mr-4'>{userNames[comment.id_user]}  </span> 
          
          <span className=' text-dark flex justify-evenlly bg-Turquesa/600 items-center px-2 py-1  w-fit rounded-xl text-Negro  bottom-2 left-2'> <BsStar className='mr-2'/> {comment.rating }  </span> 
          
          </div>
          <span className='text-lg text-Grises/200'>Hace mas de {comment.id_user * 2} horas</span>
  
          </div>
          <div className='py-2 px-2 rounded-lg text-Grises/300 font-semibold shadow-xl border-2 border-Grises/100'>
  
          {comment.text   }
  
          </div>
        </div>
))

      }
      
      </>
  } sets={
      
      <>
        <h3 className='text-lg text-Turquesa/500 mb-2'> Cuenta con la cantidad de {rutinas.routine_sets.length} sets</h3>
      {Sets.slice(0,2).map((sets) => (
      <div key={sets.id}  >
        <h4 className='text-base text-Grises/200' >
        {sets.set_name  }
    {
      day_set0.map((day) => (
        <span key={day.id} className='text-xs text-Grises/300 flex justify-evenly  flex-row w-full text-left'> {day.day_name}</span>
      ))
    }
      

        </h4>

      </div>
    ))}
      </>
    }/>
      
    </div>
   
    
   

  
  )
}

export default RutinePage