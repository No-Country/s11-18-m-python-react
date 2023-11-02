'use client'
import React, { useState, useRef, useEffect } from 'react';
import { BiImage } from 'react-icons/bi';
import { LuClapperboard } from 'react-icons/lu';
import CerrarCloseButton from './PostComp/cerrarPost';
import GalleryCamara from './PostComp/GalleryCamara';
import BoxArrastrarYsuelta from './PostComp/BoxArrastrarYsuelta';

const CrearPost = ({ onClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [cameraOpen, setCameraOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [postContent, setPostContent] = useState('');
    const [formData, setFormData] = useState(new FormData());
    const [publishDisabled, setPublishDisabled] = useState(true);
    const videoRef = useRef(null);
    const videoInputRef = useRef(null);
    const imageInputRef = useRef(null);
  
    const handleCameraClick = async () => {
      try {
        if (cameraOpen) {
          stopCamera();
          closeCamera();
        } else {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
  
          setSelectedImage(null);
          setSelectedImageUrl(null);
          setCameraOpen(true);
          setGalleryOpen(false);
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };
  
    const stopCamera = () => {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
  
      tracks.forEach((track) => {
        track.stop();
      });
  
      videoRef.current.srcObject = null;
    };
  
    const closeGallery = () => {
      setGalleryOpen(false);
    };
  
    const closeCamera = () => {
      if (cameraOpen) {
        stopCamera();
      }
      setCameraOpen(false);
    };
  
    useEffect(() => {
      setCameraOpen(false);
      setGalleryOpen(false);
    }, []);
  
    useEffect(() => {
      const newFormData = new FormData();
      newFormData.append('id', Math.random());
      newFormData.append('text', postContent);
      newFormData.append('image', selectedImageUrl || '');
      setFormData(newFormData);
  
      setPublishDisabled(!postContent && !selectedImageUrl);
    }, [postContent, selectedImageUrl]);
  
    const isMediaSelected = selectedImageUrl || formData.get('video');
  
    const handleImageClick = (index) => {
      const imageUrl = imageList[index];
      setSelectedImage(index === selectedImage ? null : index);
      setSelectedImageUrl(index === selectedImage ? null : imageUrl);
      setGalleryOpen(true);
      setCameraOpen(false);
    };
  
    const handlePublish = () => {
      console.log('FormData:', formData);
      // Additional logic for publishing, e.g., sending formData to a server
    };
  
    const handleVideoFileChange = (event) => {
        const selectedFile = event.target.files[0];
    
        if (selectedFile) {
          const maxSizeInBytes = 10 * 1024 * 1024;
    
          if (selectedFile.size > maxSizeInBytes) {
            console.error('El tamaño del archivo de video excede el límite permitido.');
            return;
          }
    
          if (validVideoFormats.includes(selectedFile.type)) {
            console.log('Video seleccionado:', selectedFile);
            setFormData((prevFormData) => {
              const newFormData = new FormData();
              newFormData.append('id', prevFormData.get('id'));
              newFormData.append('text', prevFormData.get('text'));
              newFormData.append('image', prevFormData.get('image'));
              newFormData.set('video', selectedFile);
              return newFormData;
            });
          } else {
            console.error('Formato de video no válido.');
          }
        }
      };
      const handleImageFileChange = (event) => {
        const selectedFile = event.target.files[0];
    
        if (selectedFile) {
          const maxSizeInBytes = 5 * 1024 * 1024;
    
          if (selectedFile.size > maxSizeInBytes) {
            console.error('El tamaño del archivo de imagen excede el límite permitido.');
            return;
          }
    
          if (validImageFormats.includes(selectedFile.type)) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
              const imageDataURL = e.target.result;
    
              console.log('Imagen seleccionada:', selectedFile);
              console.log('Data URL:', imageDataURL);
    
              setFormData((prevFormData) => {
                const newFormData = new FormData();
                newFormData.append('id', prevFormData.get('id'));
                newFormData.append('text', prevFormData.get('text'));
                newFormData.set('video', prevFormData.get('video'));
                newFormData.set('image', selectedFile);
                return newFormData;
              });
    
              setSelectedImageUrl(imageDataURL);
            };
    
            reader.readAsDataURL(selectedFile);
          } else {
            console.error('Formato de imagen no válido.');
          }
        }
      };
    const imageList = [
        "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4944975/pexels-photo-4944975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3490363/pexels-photo-3490363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/209887/pexels-photo-209887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];    
  
    const [validVideoFormats] = useState(['video/mp4', 'video/webm']);
    const [validImageFormats] = useState(['image/jpeg', 'image/png', 'image/gif']);
  
  return (
    <article className='w-[380px] h-fit bg-zinc-800 rounded-[8px] text-white border-[2px] border-zinc-600 mx-1 mt-[4rem] pb-4 z-20 text-center '>
      <div className='ml-24 flex pt-4 gap-[128px] '>
        <h2 className='font-medium text-[18px] text-center pl-6 '>
          Crear post
        </h2>
        <CerrarCloseButton onClose={onClose} />
      </div>
      <div className='border-[1px] border-zinc-500 my-4 w-[345px] ml-4'></div>
      <div className='flex justify-start items-center gap-3 pl-7 pb-3'>
        <div className='w-[32px] h-[32px] rounded-full border-[1px] border-Turquesa/400'>
          <img
            className='w-full h-full rounded-full object-cover'
            src='https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='avatar'
          />
        </div>
        <h2 className='text[18px] font-medium'>Manuel Hoffmann</h2>
      </div>
      <div className='text-left'>
        <textarea
          placeholder='¿Qué estás pensando, Manuel?...'
          name='post'
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className='outline-none bg-transparent pl-7 pb-8 w-[300px] resize-none overflow-hidden'
        />
      </div>
<div className=' w-full flex justify-center items-center mb-2'>

      {isMediaSelected ? (
          <img
          className='w-[332px] h-fit rounded-[8px] 
          flex justify-center  items-center leading-7  object-cover'
          src={selectedImageUrl || formData.get('video')}
          alt='selected media'
          />
          ) : (
        <BoxArrastrarYsuelta />
      )}

</div>
      {galleryOpen || cameraOpen ? (
        <GalleryCamara
          selectedImage={selectedImage}
          selectedImageUrl={selectedImageUrl}
          cameraOpen={cameraOpen}
          videoRef={videoRef}
          handleImageClick={handleImageClick}
          handleCameraClick={handleCameraClick}
          stopCamera={stopCamera}
          imageList={imageList}
          closeGallery={closeGallery}
          closeCamera={closeCamera}
        />
      ) : null}

      <div className=' my-4 flex justify-center items-center'>
        <span className='border-[1px] border-zinc-500 w-[345px]'></span>
      </div>
      <div className='flex justify-around  mb-2 items-center'>
        <h2
          className={`cursor-pointer px-2 ${
            galleryOpen ? 'border-b-Turquesa/600 border-b-2' : 'text-Grises/200'
          } ${!galleryOpen && !cameraOpen ? 'active' : ''}`}
          onClick={() => {
            handleImageClick();
            closeCamera();
            setGalleryOpen(!galleryOpen);
          }}
        >
          Galería
        </h2>
        <h2
          className={`cursor-pointer px-2 ${
            cameraOpen ? 'border-b-Turquesa/600 border-b-2' : 'text-Grises/200'
          } ${cameraOpen ? 'active' : ''}`}
          onClick={() => {
            handleCameraClick();
            closeGallery();
            setCameraOpen(!cameraOpen);
          }}
        >
          Cámara
        </h2>

        <button
          className={`w-[83px] h-[40px] rounded-[8px] ${
            publishDisabled
              ? 'text-Grises/200 bg-Turquesa/900'
              : 'text-black bg-Turquesa/700'
          } text-[16px] font-medium`}
          onClick={handlePublish}
          disabled={publishDisabled}
        >
          Publicar
        </button>
      </div>
      <div className='flex flex-row items-center justify-center text-white text-2xl gap-14 mt-4 '>
        <div className='flex items-center gap-2  justify-center'>
          <label htmlFor='videoInput' className='flex justify-evenly items-center '>
            <LuClapperboard className='text-3xl cursor-pointer mr-2' />
            <h3 className='text-sm font-light'>Video</h3>
          </label>
          <input
            type='file'
            id='videoInput'
            accept={validVideoFormats.join(',')}
            onChange={handleVideoFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className='flex items-center gap-2  justify-center'>
          <label htmlFor='imageInput' className='flex justify-evenly items-center '>
            <BiImage className='text-3xl cursor-pointer mr-2' />
            <h3 className='text-sm font-light'>Imágen</h3>
          </label>
          <input
            type='file'
            id='imageInput'
            accept={validImageFormats.join(',')}
            onChange={handleImageFileChange}
            style={{ display: 'none' }}
            ref={imageInputRef}
          />
        </div>
      </div>
    </article>
  );
};

export default CrearPost;
