import { useContext } from "react";
import { Contexto } from './contexto.jsx';
import "../estilos/estilos.css";

export default function Lenguajes() {
  const { lenguajes } = useContext(Contexto);

  return (
    <section className=' h-max gap-10 w-full justify-center flex flex-row items-center bg-opacity-10 rounded-xl bg-stone-200 md:w-2/3 mt-3 p-3'>
      <div className={`p-3 ${lenguajes[0].estado ? "shadow-o bg-orange-600" : "bg-opacity-20 bg-stone-200"} rounded-full`}>
      <img className="w-10" src="https://imgs.search.brave.com/gOjxv5MZ01cUxtlO45vJS09ZmFqrq6PWDTRIvPl0pXg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMDUxLzEwNTEy/NzcucG5n" alt="" />
      </div>

      <div className={`p-3 rounded-full ${lenguajes[1].estado ? "bg-blue-800 shadow-b" : "bg-opacity-20 bg-stone-200"}`}>
      <img className="w-10" src="https://imgs.search.brave.com/Xb4bdky1u98c0W6L2yIjJ25SPu2YhLToNi41H-MnqHI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTk2OC81OTY4/MjQyLnBuZw" alt="" />
      </div>

      <div className={`p-3 ${lenguajes[2].estado ? "bg-amber-300 shadow-y" : "bg-opacity-20 bg-stone-200"} rounded-full`}>
       <img className="w-10" src="https://imgs.search.brave.com/rinaUdvcKBi1ONJtzaP8q1yCtfyUeN1m0_LeJkNKX8s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzE2NjQwMy9p/c29sYXRlZC9saXN0/cy9hNWEzM2JmMzAw/NDgzMGEyYmQ1ODFl/OWZhNjVkZTY2MC1p/Y29uby1kZWwtbGVu/Z3VhamUtZGUtcHJv/Z3JhbWFjaW9uLWph/dmFzY3JpcHQucG5n" alt="" />
      </div>
    </section>
  );
}