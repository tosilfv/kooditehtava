import { useEffect, useReducer } from "react";
import { ROMANS } from "../constants/storageKeys";
import { romanseed } from "../seeds/romanseed";
import romanReducer from "../reducers/romanReducer";

export default function useStorageRomanReducer() {
  const [storage, dispatch] = useReducer(romanReducer, romanseed, () => {
    let storageRomans;
    try {
      storageRomans = JSON.parse(window.localStorage.getItem(ROMANS)) || romanseed;
    } catch (error) {
      throw new Error(`useStorageRomanReducer() error: ${error}`);
    }
    return storageRomans;
  });
  useEffect(() => {
    window.localStorage.setItem(ROMANS, JSON.stringify(storage));
  }, [storage]);
  return [storage, dispatch];
}
