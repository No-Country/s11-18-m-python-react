import React, { useState, useRef } from 'react';

function GalleryCamara() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(true);
  const [cameraOpen, setCameraOpen] = useState(false);
  const videoRef = useRef(null); // Ref for video element

  const handleImageClick = (index) => {
    const imageUrl = imageList[index];
    setSelectedImage(index === selectedImage ? null : index);
    setSelectedImageUrl(index === selectedImage ? null : imageUrl);
    setCameraOpen(false);
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraOpen(true);
        setGalleryOpen(false);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleGalleryClick = () => {
    setGalleryOpen(true);
    setCameraOpen(false);
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
  

  return (
    <>
      <div className={`flex justify-center pb-[6px] ${!selectedImageUrl ? 'hidden' : ''}`}>
        <div className='w-[332px] h-[192px]'>
          {selectedImageUrl && (
            <img
              className='w-full h-full object-cover'
              src={selectedImageUrl}
              alt="foto post"
            />
          )}
        </div>
      </div>

      <div className={`flex flex-wrap gap-2 justify-center pb-3 ${galleryOpen && !cameraOpen ? '' : 'hidden'}`}>
        {imageList.map((src, index) => (
          <img
            key={index}
            className={`w-[105px] h-[100px] object-cover ${
              index === selectedImage ? 'border-Turquesa/700 border-4' : ''
            }`}
            src={src}
            alt={`img post ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <div className={`flex justify-center pb-[6px] ${cameraOpen ? '' : 'hidden'}`}>
        <video ref={videoRef} className='w-[332px] h-[192px]' autoPlay playsInline muted />
      </div>

      <div className='flex justify-around pt-2 items-center'>
        <h2
          className={` cursor-pointer px-2 ${
            galleryOpen ? 'border-b-Turquesa/600 border-b-2' : ''
          } ${!galleryOpen && !cameraOpen ? 'active' : ''}`}
          onClick={handleGalleryClick}
        >
          Galería
        </h2>
        <h2
          className={` cursor-pointer px-2${
            cameraOpen ? 'border-b-Turquesa/600 border-b-2' : ''
          } ${!cameraOpen && !galleryOpen ? 'active' : ''}`}
          onClick={handleCameraClick}
        >
          Cámara
        </h2>
        <button
          className={ !selectedImageUrl && !cameraOpen ? `w-[83px] h-[40px] rounded-[8px]  text-Grises/200
        bg-Turquesa/900   text-[16px] font-medium` :  `w-[83px] h-[40px] rounded-[8px] text-black
        bg-Turquesa/700   text-[16px] font-medium`}
        >
          Publicar
        </button>
      </div>
    </>
  );
}

export default GalleryCamara;
