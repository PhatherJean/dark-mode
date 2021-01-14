import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const itemx = window.localStorage.getItem(key);
    return itemx ? JSON.parse(itemx) : initialValue;
    // if(localStorage.getItem(key)){
    //     return JSON.parse(localStorage.getItem(key));
    // }
    // localStorage.setItem(key, JSON.stringify(initialValue))
    // return initialValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
