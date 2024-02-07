import { useContext } from "react";
import { Contexto } from './contexto.jsx';
import "../estilos/estilos.css";

export default function Lenguajes() {
  const { lenguajes } = useContext(Contexto);

  return (
    <section className=' h-max gap-10 w-full justify-center flex flex-row items-center bg-opacity-10 rounded-xl bg-stone-200 md:w-2/3 mt-3 p-3'>
      <div className={`p-3 ${lenguajes[0].estado ? "shadow-o bg-orange-600" : "bg-opacity-20 bg-stone-200"} rounded-full`}>
      <img className="w-10" src="/img/0.webp" alt="" />
      </div>

      <div className={`p-3 rounded-full ${lenguajes[1].estado ? "bg-blue-800 shadow-b" : "bg-opacity-20 bg-stone-200"}`}>
      <img className="w-10" src="/img/1.webp" alt="" />
      </div>

      <div className={`p-3 ${lenguajes[2].estado ? "bg-amber-300 shadow-y" : "bg-opacity-20 bg-stone-200"} rounded-full`}>
       <img className="w-10" src="/img/2.webp" alt="" />
      </div>
    </section>
  );
}