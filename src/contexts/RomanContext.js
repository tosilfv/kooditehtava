import React, { createContext } from "react";
import useStorageRomanReducer from "../hooks/useStorageRomanReducer";

export const RomanContext = createContext();
export const DispatchContext = createContext();

export default function RomanProvider(props) {
  const [romans, dispatch] = useStorageRomanReducer();
  return (
    <RomanContext.Provider value={{ romans }}>
      <DispatchContext.Provider value={{ dispatch }}>
        {props.children}
      </DispatchContext.Provider>
    </RomanContext.Provider>
  );
}
