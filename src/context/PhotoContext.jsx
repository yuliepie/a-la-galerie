import React, { useState, useContext } from "react";

const init = {
  photo: [
    {
      id: "",
      title: "",
      author: "",
      description: "",
      url: "",
      link: "",
    },
  ],
};

const photoCtx = React.createContext(init);

export const PhotoContextProviderWrapper = children => {
  const [photo, setPhoto] = useState(init);

  return (
    <photoCtx.Provider value={{ photo, setPhoto }}>
      {children}
    </photoCtx.Provider>
  );
};

export const usePhotoContext = () => useContext(photoCtx);
