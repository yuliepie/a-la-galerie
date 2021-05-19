import React, { useEffect, useState, useMemo, useRef } from "react";
import { v4 as uuid } from "uuid";
import UnsplashService from "../service/UnsplashService";

const GallaryMain = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const queryKeyword = useRef("contemporary arts");

  useEffect(() => {
    (async () => {
      const { urls, status } = await UnsplashService.getPhotoURLs(queryKeyword.current);
      console.log("Photo Fetch Result:", status);
      setImageURLs(urls);
    })();
  }, []);

  const imgs = useMemo(
    () =>
      imageURLs &&
      queryKeyword &&
      queryKeyword.current &&
      imageURLs.map((url, i) => (
        <img key={uuid()} src={url} alt={`${queryKeyword.current}--${i}`} />
      )),
    [imageURLs, queryKeyword]
  );

  return <div>{imgs}</div>;
};

export default GallaryMain;
