"use client"
import { createContext, PropsWithChildren, useContext } from "react";
import { useState, useMemo} from "react";

const ContextHolder  = createContext<any>({});
export const useGlobalContext = ()=> useContext(ContextHolder);
export const ContextProvider =({children}: PropsWithChildren)=> {
    
const [searchQuery, setQueryState] = useState("")
   const holdValues = useMemo(() => ({
    searchQuery, setQueryState
  }), [searchQuery]);
    return (
        <ContextHolder.Provider value ={holdValues}>
        {children}
        </ContextHolder.Provider>
    )
} 
