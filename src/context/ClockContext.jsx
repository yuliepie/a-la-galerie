import React, { useState, useContext } from "react";
import { useCallback } from "react";

const init = {
  time: {
    hour: [],
    minute: [],
    second: [],
  },
  calcTime: () => {},
};

const clockContext = React.createContext(init);

export const ClockContextProviderWrapper = children => {
  const [time, setTime] = useState(init);
  const calcTime = useCallback(() => {
    const currentTime = new Date();
    const hour = currentTime.getHours().toString().split("");
    if (!hour[1]) {
      hour[1] = hour[0];
      hour[0] = "0";
    }
    console.log(hour);

    const minute = currentTime.getMinutes().toString().split("");
    if (!minute[1]) {
      minute[1] = minute[0];
      minute[0] = "0";
    }
    console.log(minute);

    const second = currentTime.getSeconds().toString().split("");
    if (!second[1]) {
      second[1] = second[0];
      second[0] = "0";
    }

    setTime({
      hour,
      minute,
      second,
    });
  }, []);

  return <clockContext.Provider value={{ time, calcTime }} {...children} />;
};

export const useClockContext = () => {
  const ctx = useContext(clockContext);
  if (!ctx) {
    throw new Error("No clock context is valid! put a provider!");
  }
  return ctx;
};
