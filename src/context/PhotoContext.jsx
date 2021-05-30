import React, { useState, useContext } from "react";

const init = {
  photos: [
    {
      id: "",
      title: "",
      author: "",
      description: "",
      url: "",
      link: "",
    },
  ],
  setPhotos: newPhotos => {},
};

export const photoCtx = React.createContext(init);

export const PhotoContextProviderWrapper = children => {
  const [photos, setPhotos] = useState(init);

  return <photoCtx.Provider value={{ photos, setPhotos }} {...children} />;
};

export const usePhotoContext = () => useContext(photoCtx);
