// contexto.jsx
import { createContext, useEffect, useState } from "react";

export const Contexto = createContext();

export const ProviderContext = ({ children }) => {
  const [lenguajes, setLenguajes] = useState([{estado:false,id:0}, {estado:false,id:1}, {estado:false,id:2}]);
  const [ganador,setGanador] = useState(false)
  useEffect(()=>{
    
    if(lenguajes.every(elemento => elemento === true)){
  
       //modal ganador
       setGanador(true)
       setLenguajes([{estado:false,id:0}, {estado:false,id:1}, {estado:false,id:2}])

    }
  },[lenguajes])

  return (
    <Contexto.Provider value={{ lenguajes, setLenguajes , ganador , setGanador }}>
      {children}
    </Contexto.Provider>
  );
};