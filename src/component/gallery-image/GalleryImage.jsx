import React from "react";

const GalleryImage = ({ url, onClickImg, deleter }) => {
  // props 는 자유롭게 받아서 하기!
  // return <img ..... /> 같이
  return <img src={url} alt={url} onClick={_ => onClickImg(deleter)} className="Gallary-image" />;
};

export default GalleryImage;
