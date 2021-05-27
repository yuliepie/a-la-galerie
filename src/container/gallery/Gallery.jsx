import "./Gallery.css";

import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import UnsplashService from "../../service/UnsplashService";
import GalleryImage from "../../component/gallery-image/GalleryImage";
import { makeRandomQueryKeyword, randRange } from "../../util/Common";

// 앞으로는 이렇게 데이터를 저장할 거에요
const initPhotos = [
  {
    id: "",
    title: "",
    author: "",
    description: "",
    url: "",
    link: "",
  },
];

const Gallery = () => {
  // const [imageURLs, setImageURLs] = useState([]);

  // 이제 는 image url 만 필요하지 않을 것 같습니다!
  // 이미지를 누르면 삭제하는건 누구도 원하지 않을 UX 가 아닌가요?
  // 그래서 우리는 이미지를 누르면, 그 이미지에 대한 정보가 나오도록 바꿀거에요!
  //
  const [photos, setPhotos] = useState(initPhotos);

  useEffect(() => {
    (async () => {
      // 1. 기존에 불러오던 이미지도 조금 조정하여 이미지를 랜덤하게 불러올 거에요
      // 1-1. query keyword ("contemporary art", "modern art", "art nouveau", "pop art", "dog", "cat") 중 1 랜덤 선택 되도록 queryKeyword 를 구성 하세요.
      // 1-2. page 를 1 ~ 100 중 랜덤 선택 되도록 조정하세요.
      let response = await UnsplashService.get7Photos(
        makeRandomQueryKeyword(),
        randRange(1, 100)
      );
      if (!response) {
        console.error("No valid response");
        return;
      }
      // setPhotos(response.results);
      //
      setPhotos(
        response.results.map(res => ({
          id: res.id,
          title: res.alt_description,
          author: `${res.user.first_name} ${res.user.last_name}`,
          description: res.description ?? "No Description",
          url: res.urls.raw,
          link: res.links.download,
        }))
      );
    })();
  }, []);

  // 2. 누르면 이미지 삭제 -> 이미지에 설명 나오기 로 변경
  // 정의된 title, author, description, rawURL, link 를 이용해서
  // <GalleryImage /> 의 <GalleryImageDetails /> 를 완성 하세요.
  const imgsJSX =
    photos &&
    photos.length > 1 &&
    photos.map(photo => <GalleryImage key={uuid()} {...photo} />);

  return <div className="Gallery">{imgsJSX}</div>;
};

export default Gallery;
