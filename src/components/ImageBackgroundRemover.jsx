import React, { useState, useRef } from "react";

import axios from 'axios'

import './ImageBackgroundRemover.css'

const ImageBackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Remove background and process image
  const removeBackground = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image_file", fileInputRef.current.files[0]);
    formData.append("size", "auto");

    try {
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "gcLysczFca3LWQT2SdWX2v4V", // Replace with your API key
          },
          responseType: "blob",
        }
      );

      const reader = new FileReader();
      reader.onloadend = () => {
        setProcessedImage(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(response.data);
    } catch (error) {
      console.error("Error removing background:", error);
      setLoading(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement("a");
    link.href = processedImage;
    link.download = "processed-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1>Remove Image Background Tools</h1>
      <div className="upload-section">
        <input
        className="remove-image-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
        <button onClick={removeBackground} disabled={!image || loading}>
          {loading ? "Processing..." : "Remove Background/Edit Size"}
        </button>
      </div>

      {processedImage && (
        <div className="image-section">
          <div className="scale-controls">
            <label>
              Width (px):
              <input
              className="remove-image-input"
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                min="100"
                max="500"
              />
            </label>
            <label>
              Height (px):
              <input
                className="remove-image-input"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="100"
                max="500"
              />
            </label>
           
          </div>
       

        
          <img
            src={processedImage}
            alt="Processed"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
               <button className="download-btn" onClick={handleDownload}>Download Image</button>
          
         
        </div>
      )}
  
    </div>
  );
};

export default ImageBackgroundRemover;