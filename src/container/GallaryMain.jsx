import React, { useRef } from "react";

import "./GallaryMain.css";

const GallaryMain = () => {
  // 0. query 에 사용할 키워드 ! (useRef 로 사용하시오)
  // 왜 useRef 를 사용 했나요? ->
  const queryKeyword = useRef("contemporary arts");

  // 1. 사진 URL 들을 저장할 배열 state 를 만든다.
  // 왜 ... 했나요 ? ->

  // 2. 컴포넌트 렌더 시에 처음에 단 한 번, UnsplashService.getPhotoURLs() 를 이용해 사진 URL 들을 얻어온 다음, state 로 저장한다. (getPhotoURLs() 는 async 함수 임)
  // 왜 ... 했나요 ? ->

  // 3-1. 2. 에서 받아온 사진 URL 들과 <img/> 를 이용하여 JSX 를 만들기! JSX 는 useMemo() 로 caching 할 수 있다.
  // 3-2. 각 img 마다 클릭 시에 클릭 된 img 를 삭제 하도록 구현 -> array 조작을 이용 (젤 어려움)

  // 왜 ... 했나요 ? ->

  // 4. 3. 에서 만든 JSX 를 리턴!
  // return <div className="GallaryMain">{...}</div>;
};

export default GallaryMain;

import React, { useRef } from "react";
import "./GallaryMain.css";

const GallaryMain = () => {
  // 0. query 에 사용할 키워드 ! (useRef 로 사용하시오)
  // 왜 useRef 를 사용 했나요? ->
  const queryKeyword = useRef("contemporary arts");

  // 1. 사진 URL 들을 저장할 배열 state 를 만든다.
  // 왜 ... 했나요 ? ->

  // 2. 컴포넌트 렌더 시에 처음에 단 한 번, UnsplashService.getPhotoURLs() 를 이용해 사진 URL 들을 얻어온 다음, state 로 저장한다. (getPhotoURLs() 는 async 함수 임)
  // 왜 ... 했나요 ? ->

  // 3-1. 2. 에서 받아온 사진 URL 들과 <img/> 를 이용하여 JSX 를 만들기! JSX 는 useMemo() 로 caching 할 수 있다.
  // 3-2. 각 img 마다 클릭 시에 클릭 된 img 를 삭제 하도록 구현 -> array 조작을 이용 (젤 어려움)
  // 3-3.    img 는 GallaryImage 컴포넌트로 child 로 제작하기!

  // 왜 ... 했나요 ? ->

  // 4. 3. 에서 만든 JSX 를 리턴!
  // return <div className="GallaryMain">{...}</div>;
};

export default GallaryMain;
