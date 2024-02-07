import { useContext, useEffect, useState } from "react"
import { Contexto } from "./contexto"
import { preguntasConOpciones } from "../data/preguntas"
import "../estilos/estilos.css"
import ModalGanador from "./ganador"


export default function GenerarPregunta(){
     const {lenguajes,setLenguajes,ganador} = useContext(Contexto)
     const [boton,setBoton] = useState(true)
     const [pregunta,setPregunta] = useState(undefined)
     const  [aciertos,setAciertos] = useState(0)
     const [seleccion , setSeleccion] = useState([-1,undefined])

    const handleclick=()=>{
        setSeleccion([-1, undefined])
        setBoton(false)
        const lenguajesRestantes = lenguajes.filter((lenguaje)=>{return lenguaje.estado==false})
        const posicionAleatoria = Math.floor(Math.random() * lenguajesRestantes.length);
        
        setPregunta({p:preguntasConOpciones[lenguajesRestantes[posicionAleatoria].id].preguntas[Math.floor(Math.random() * preguntasConOpciones[lenguajesRestantes[posicionAleatoria].id].preguntas.length)],lenguaje:lenguajesRestantes[posicionAleatoria].id})
    }
    
    const handleclick_opcion=(opcion,opcion_correcta,id)=>{
       
        if(seleccion[0]!==  -1)
        {
            
            return
        }
        setBoton(true)
        if(opcion==opcion_correcta){
            setAciertos(aciertos+1)
            setSeleccion([id,true])    
            return

        }
        setAciertos(0)   
        setSeleccion([id,false])    
        
    }

    useEffect(()=>{
       
        if(aciertos==4){
            setAciertos(0);
            
            const new_lenguajes = [...lenguajes]
            new_lenguajes[pregunta.lenguaje].estado=true;
            setLenguajes(new_lenguajes)

        

        }
    },[aciertos])
 

return(<>
     {ganador ?
     <ModalGanador></ModalGanador> 
     : undefined
     }
    <div className="lg:w-2/3 w-full flex flex-col md:flex-row  h-full gap-3 md:gap-0 p-3 md:px-10 lg:px-0">
        
       { pregunta  ? 
        <div className="h-max m-auto rounded-xl bg-stone-200 bg-opacity-10 px-10 py-3 md:p-3  shadow-w">
                
                <img className="md:w-20 w-10" src={`/img/${pregunta.lenguaje}.webp`} alt="" />
                
        </div>
        : undefined
        }
       

    
     {
       pregunta!==undefined ?  
       
      <div className=" w-full flex flex-col items-center justify-center m-0">
        <div className="flex flex-col gap-3 bg-zinc-900 bg-opcity-40  md:w-2/3 w-full text-white rounded-md p-3">
            <h3 className="p-2 font-bold text-xl w-full text-center">{pregunta.p.pregunta}</h3>
            <div className="overflow-auto h-full p-0">

           
            {

                pregunta.p.opciones.map((opcion,id)=>{
                    return (
                        <p
                              className={`${
                               seleccion[0] === id
                               ? seleccion[1]==true
                               ? "bg-green-500 hover:bg-green-400"
                               : "bg-red-800 hover:bg-red-700"
                               : ""
                          } rounded-md p-2 hover:text-zinc-400 hover:bg-zinc-800 cursor-pointer w-full text-center`}
                        onClick={(e) => {
                        handleclick_opcion(opcion, pregunta.p.respuestaCorrecta, id);
                                          }}
                                         >
                            {opcion}
                          </p>
                    )
                })
            }
             </div>

        </div>
         
         <div className="flex flex-row gap-5 p-5">
            <div className={`w-10 h-3 bg-stone-200  opacity-20 rounded-lg ${aciertos>=1 ? "bg-amber-500 opacity-80 shadow-a" : ""}`}></div>
            <div className={`w-10 h-3 bg-stone-200  opacity-20 rounded-lg ${aciertos>=2 ? "bg-amber-500 opacity-80 shadow-a" : ""}`}></div>
            <div className={`w-10 h-3 bg-stone-200  opacity-20 rounded-lg ${aciertos==3 ? "bg-amber-500 opacity-80 shadow-a" : ""}`}></div>
         </div>

        </div>
        : undefined

}
{ 
        boton ? 
        <button onClick={handleclick} className="shadow-w hover:opacity-50 hover:scale-110 transition-all m-auto text-white p-5 rounded-lg bg-stone-200 bg-opacity-10">
          Generar pregunta
        </button> : undefined
    }

   
       </div>   
       </>
)}