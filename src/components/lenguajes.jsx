import { useContext } from "react";
import { Contexto } from './contexto.jsx';
import {lenguajes_estilos} from "../data/lenguajes.js"

export default function Lenguajes() {
  const { lenguajes } = useContext(Contexto);

  return (
    <section className=' h-max gap-10 w-full justify-center flex flex-row items-center bg-opacity-10 rounded-xl bg-stone-200 md:w-2/3 mt-3 p-3'>
      {
        lenguajes_estilos.map((lenguaje,id)=>{
          return(
            <div  key={id+10} className={`p-3 ${lenguajes[0].estado ? lenguaje.estilo : "bg-opacity-20 bg-stone-200"} rounded-full`}>
              <img className="w-10" src={`${lenguaje.img}`} alt="" />
            </div>
          )
        })
      }
    </section>
  );
}