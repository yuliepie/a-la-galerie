import "./Clock.css";

import React from "react";
import { useEffect } from "react";
import { useClockContext } from "../../context/ClockContext";

const Clock = () => {
  // 1. clock context 를 만드세요
  // 현재 시간, 분, 초 필요.
  const clockCtx = useClockContext();

  // 2. 1초  마다 시간이 갱신되게 하고, 시계에 렌더하세요
  // + 15 시 -> 1 5 로 표기
  // + 5 시 -> 0 5 로 표기
  useEffect(() => {
    const timer = setTimeout(() => {
      clockCtx.calcTime();
    }, 1000);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [clockCtx]);

  const { hour, minute, second } = clockCtx.time;

  const hourJSX = hour && hour.length > 1 && (
    <div className="Gallery__clock__card">
      <p className="Gallery__clock__digit">{hour[0]}</p>
      <p className="Gallery__clock__digit">{hour[1]}</p>
    </div>
  );

  const minuteJSX = minute && minute.length > 1 && (
    <div className="Gallery__clock__card">
      <p className="Gallery__clock__digit">{minute[0]}</p>
      <p className="Gallery__clock__digit">{minute[1]}</p>
    </div>
  );

  const secondJSX = second && second.length > 1 && (
    <div className="Gallery__clock__card">
      <p className="Gallery__clock__digit">{second[0]}</p>
      <p className="Gallery__clock__digit">{second[1]}</p>
    </div>
  );

  return (
    <div className="Gallery__Clock">
      {hourJSX}
      <div className="Gallery__Clock__divider">:</div>
      {minuteJSX}
      <div className="Gallery__Clock__divider">:</div>
      {secondJSX}
    </div>
  );
};

export default Clock;
