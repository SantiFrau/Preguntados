// contexto.jsx
import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export const ProviderContext = ({ children }) => {
  const [lenguajes, setLenguajes] = useState([{estado:false,id:0}, {estado:false,id:1}, {estado:false,id:2}]);
   
  useEffect(()=>{
    
    if(lenguajes.every(elemento => elemento === true)){
  
       //modal ganador

    }
  },[lenguajes])

  return (
    <Contexto.Provider value={{ lenguajes, setLenguajes }}>
      {children}
    </Contexto.Provider>
  );
};