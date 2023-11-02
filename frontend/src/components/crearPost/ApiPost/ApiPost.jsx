'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiSolidHeartCircle, BiComment } from 'react-icons/bi';
import { PiShareFatDuotone } from 'react-icons/pi';
import { BsBookmark, BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';

const PostComponent = () => {
  const [posts, setPosts] = useState([]); // Inicializado con un array vacío
  const [isLoading, setIsLoading] = useState(true);

  const userNames = {
    1: 'Juan Pablo',
    2: 'Lucas Simoes',
    3: 'Agustin Ribotta',
    4: 'Evenlyn Ariani',
    5: 'Fabricio Reyna',
    6: 'Eduardo Vega',
  };
  const UrlAvatars = {
    1: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    2: 'https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    3: 'https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    4: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    5: 'https://res.cloudinary.com/dhb9rdaoc/image/upload/v1690335910/FabriIIcon.jpg',
    6: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://ec2-3-101-14-170.us-west-1.compute.amazonaws.com/posts/posts/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const postsData = await response.json();

        // Ordenar los posts por ID de mayor a menor
        const sortedPosts = postsData.sort((a, b) => b.id - a.id);

        setPosts(sortedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='flex justify-center w-full flex-col items-center mt-2'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.id} className='w-[380px] h-full bg-zinc-800 rounded-[8px] text-white my-4 gap-2'>
            <div className='flex justify-between px-3 py-5'>
              <div className='flex gap-3'>
                <div className='rounded-full w-[56px] h-[56px]'>
                  <img
                    className='w-full h-full object-cover rounded-full border-Turquesa/600 border-[1px]'
                    src={UrlAvatars[post.user]}
                    alt='avatar image'
                  />
                </div>
                <div>
                  <h2 className='text-[18px]'>{userNames[post.user]}</h2>
                  <p className='text-[10px]'>{`Publicado hace ${post.id * 2} horas`}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <BsThreeDotsVertical className='text-3xl' />
              </div>
            </div>

            <div className='px-5 pb-4 text-[14px] leading-[20px]'>
              <p>{post.content}</p>
            </div>
<div className='w-full justify-center items-center mb-2'> 

            {post.image_url && (
              <div className='w-[380px] h-full pb-2 flex  justify-center items-center px-4'>
                <img  src={`http://ec2-3-101-14-170.us-west-1.compute.amazonaws.com/${post.image_url}`} alt='Post Image' />
              </div>
            )}
    {post.video_url && (
              <video width="100%" height="240" controls className='flex  justify-center items-center px-4'> 
                <source src={`http://ec2-3-101-14-170.us-west-1.compute.amazonaws.com/${post.video_url}`} type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            )}
</div>

            <div className='border-[1px] border-zinc-500 w-[345px] ml-4'></div>

            <div className='flex justify-end pr-3 py-4 gap-4 text-xl'>
                <div className='flex  justify-evenly items-center  '>
              <AiOutlineLike className='mr-2' /> {post.total_likes}

                </div>
                <div className='flex  justify-evenly items-center  '>
              <BiComment className='mr-2' /> {post.total_comments}

                </div>
              <div className='flex  justify-evenly items-center  '>
              <PiShareFatDuotone className='mr-2' /> {post.total_repost}

              </div>
              <div className='flex  justify-evenly items-center  '>
              <BsBookmark />

              </div>
            </div>
          </article>
        ))
      ) : (
        <p>No hay posts disponibles.</p>
      )}
    </div>
  );
};

export default PostComponent;
