import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storage, setStorage] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? JSON.parse(local) : initialValue;
  });
  const setValue = (value) => {
    setStorage(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storage, setValue];
};
export default useLocalStorage;
