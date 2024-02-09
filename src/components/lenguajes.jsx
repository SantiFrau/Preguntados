import { useContext } from "react";
import { Contexto } from './contexto.jsx';
import {lenguajes_estilos} from "../data/lenguajes.js"
<<<<<<< HEAD
import "../estilos/estilos.css";
=======
>>>>>>> 6e915cb6ec378e6477c585216437fab008b4e744

export default function Lenguajes() {
  const { lenguajes } = useContext(Contexto);

  return (
    <section className=' h-max gap-10 w-full justify-center flex flex-row items-center bg-opacity-10 rounded-xl bg-stone-200 md:w-2/3 mt-3 p-3'>
      {
        lenguajes_estilos.map((lenguaje,id)=>{
          return(
            <div className={`p-3 ${lenguajes[id].estado ? lenguaje.estilos : "bg-opacity-20 bg-stone-200"} rounded-full`}>
              <img className="w-10" src={`${lenguaje.img}`} alt="" />
            </div>
          )
        })
      }
    </section>
  );
}