import React from "react";

const GallaryImage = ({ url, alt, onImageClick }) => {
  // props 는 자유롭게 받아서 하기!
  // return <img ..... /> 같이

  return (
    <img
      src={url}
      alt={alt}
      onClick={onImageClick}
    />
  )
};

export default GallaryImage;
