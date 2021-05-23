import "./Gallery.css";

import React, { useRef, useState, useEffect, useCallback } from "react";
import UnsplashService from "../service/UnsplashService";
import { v4 as uuid } from "uuid";
import GalleryImage from "../component/gallery-image/GalleryImage";

const Gallery = () => {
  // 0. query 에 사용할 키워드 ! (useRef 로 사용하시오)
  // 왜 useRef 를 사용 했나요? -> render 를 일으키지 않을 변수가 필요
  const queryKeyword = useRef("contemporary arts");

  // 1. 사진 URL 들을 저장할 배열 state 를 만든다.
  // 왜 ... 했나요 ? -> url 이 저장되어 <img> 에 쓰일 때 자연스럽게 re-render 를 유도
  const [imageURLs, setImageURLs] = useState([]);

  // 2. 컴포넌트 렌더 시에 처음에 단 한 번, UnsplashService.getPhotoURLs() 를 이용해 사진 URL 들을 얻어온 다음, state 로 저장한다. (getPhotoURLs() 는 async 함수 임)
  // 왜 ... 했나요 ? -> url fetch 는 처음 단 한번 하는게 맞기 때문에, empty array 를 dependency 로 하는
  //                   useEffect 사용
  useEffect(() => {
    // (async () => {
    //   const urls = await UnsplashService.getPhotoURLs(queryKeyword.current, 4);
    //   setImageURLs(urls);
    // })();
    UnsplashService.getPhotoURLs(queryKeyword.current, 7).then(url => setImageURLs(url));
  }, []);

  // 3-1. 2. 에서 받아온 사진 URL 들과 <img/> 를 이용하여 JSX 를 만들기! JSX 는 useMemo() 로 caching 할 수 있다.
  // 3-2. 각 img 마다 클릭 시에 클릭 된 img 를 삭제 하도록 구현 -> array 조작을 이용 (젤 어려움)
  // 3-3.    img 는 GallaryImage 컴포넌트로 child 로 제작하기!
  const onClickImg = useCallback(
    deleter => setImageURLs(imageURLs.filter((_, i) => i !== deleter)),
    [imageURLs]
  );

  const imgsJSX =
    imageURLs &&
    imageURLs.map((url, i) => (
      <GalleryImage key={uuid()} url={url} onClickImg={onClickImg} deleter={i} />
    ));

  // 왜 ... 했나요 ? ->
  // 3-1. url 들이 여러 개 필요하고, url의 변경을 감지하여 변경되는 jsx[] 가 필요 -> array.prototype.map
  // imageURLs 에 따라서 url count 만큼 JSX 가 만들어 지거나, null 이므로 굳이 useMemo 안씀
  // 3-2. 각 img 들에 onClick 을 설정 해야하므로, callback 과 img index 를 보냄 -> imageURLs 을 이쪽에서 조작 해야 하므로

  // 4. 3. 에서 만든 JSX 를 리턴!
  return (
    <div className="Gallary">      
      {imgsJSX}
    </div>
  );
};

export default Gallery;
