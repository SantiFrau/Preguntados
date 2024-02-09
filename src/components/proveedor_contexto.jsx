import { ProviderContext } from "./contexto.jsx"
import Lenguajes from "./lenguajes.jsx"
import GenerarPregunta from "./Generar_pregunta.jsx"

export default function Provedor({children}){
    return(
   
      <ProviderContext>
        
        <Lenguajes></Lenguajes>
        
        {children}
        
	     

		   <GenerarPregunta></GenerarPregunta>

	     
     
        
      </ProviderContext >
  
    )
}