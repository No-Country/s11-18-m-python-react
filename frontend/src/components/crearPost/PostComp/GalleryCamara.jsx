import React from 'react';

const GalleryCamara = ({
  selectedImage,
  selectedImageUrl,
  cameraOpen,
  videoRef,
  handleImageClick,
  handleCameraClick,
  stopCamera,
  imageList,
}) => {
  const closeGallery = () => {
    handleImageClick(null);
  };

  const closeCamera = () => {
    handleCameraClick();
    stopCamera();
  };

  return (
    <div className='flex justify-evenly  flex-col  items-center pb-[6px]'>


      {cameraOpen && (
        <div className='w-[332px] h-[192px]'>
          <video className='w-full h-full' ref={videoRef} autoPlay onClick={closeCamera} />
        </div>
      )}

      {imageList.length > 0 && !cameraOpen && (
        <div className='flex flex-wrap gap-2 justify-center pb-3'>
          {imageList.map((src, index) => (
            <img
              key={index}
              className={`w-[105px] h-[100px] object-cover ${index === selectedImage ? 'border-Turquesa/700 border-4' : ''}`}
              src={src}
              alt={`img post ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryCamara;
