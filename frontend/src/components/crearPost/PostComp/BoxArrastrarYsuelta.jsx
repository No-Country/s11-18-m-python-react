'use client'
import React, { useState } from 'react';
import { BiImage } from 'react-icons/bi';

function BoxArrastrarYsuelta() {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    if (droppedFile) {
      if (droppedFile.type.startsWith('image/') || droppedFile.type.startsWith('video/')) {
        if (droppedFile.type.startsWith('video/') && droppedFile.size > 5 * 1024 * 1024) {
          alert('El video debe tener un tamaño menor a 5 MB.');
        } else {
          setFile(droppedFile);
        }
      } else {
        alert('Por favor, selecciona una imagen o un video.');
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile.type.startsWith('image/') || selectedFile.type.startsWith('video/')) {
        if (selectedFile.type.startsWith('video/') && selectedFile.size > 5 * 1024 * 1024) {
          alert('El video debe tener un tamaño menor a 5 MB.');
        } else {
          setFile(selectedFile);
        }
      } else {
        alert('Por favor, selecciona una imagen o un video.');
      }
    }
  };

  const openFileDialog = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div
      className="flex justify-center mb-10"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="w-[332px] h-[150px] rounded-[8px] bg-zinc-500
      flex justify-center flex-col items-center leading-7">

        {!file ? (
          <>
            <BiImage className="text-3xl mb-1 cursor-pointer" onClick={openFileDialog} />
            <h3>Agregar fotos/videos</h3>
            <h4>o arrastra y suelta</h4>
            <input
              id="fileInput"
              type="file"
              accept="image/*, video/*"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
          </>
        ) : (
          <div>
            {file.type.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Imagen seleccionada"
                className="w-full h-full object-cover rounded-[8px]"
              />
            ) : (
              <video
                src={URL.createObjectURL(file)}
                alt="Video seleccionado"
                className="w-full h-full object-cover rounded-[8px]"
                controls
              />
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default BoxArrastrarYsuelta;
