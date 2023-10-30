import Link from 'next/link'
import React from 'react'

const CategoryCard = [
  {
    id: 1,
    title: "equilibrio",
    src: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "flexibilidad",
    src: "https://images.pexels.com/photos/6295713/pexels-photo-6295713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    id: 3,
    title: "fortalecimiento",
    src: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "resistencia",
    src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]


const CategoryCardComp = () => {
  return (
    <>
    {
      CategoryCard.map((category) => {
        return(
          <Link key={category.id} href={`/a/rutinas/${category.title}`}>
         
          <article key={category.id} className='w-[380px] h-fit rounded-[8px] 
          border-Turquesa/700 border-[1px] relative'>
             <img className='object-cover rounded-[8px]' src={category.src} alt={category.title} />
             <div className='w-[380px] h-[51px] bg-Turquesa/600 absolute top-28'>
                 <h1 className='text-[24px] font-semibold text-center pt-1 first-letter:uppercase'>
                     {category.title}
                 </h1>
             </div>
         </article>
         </Link>
        )
      })
    }
    
    </>

  )
}

export default CategoryCardComp