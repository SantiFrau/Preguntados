import { useState, useEffect,useContext } from "react";
import { Contexto } from "./contexto";

export default function ModalGanador() {
  const { setGanador } = useContext(Contexto);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Mostrar el modal gradualmente después de que se renderice el componente
    setModalVisible(true);
  }, []);

  return (
    <div
    className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center items-center ${
      modalVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
    } transition-opacity transition-transform duration-300`}
  >
      <div className="border border-white flex flex-col items-center justify-center p-3 bg-zinc-900 w-2/3 md:w-1/2 rounded-lg gap-5">
      <h3 className="text-center text-white font-bold text-xl"><strong className="text-orange-500">Preguntados </strong><strong className="text-blue-500">Sobre </strong> <strong className="text-yellow-300">Programacion</strong> </h3>
        <h3 className="text-zinc-300 font-bold text-xl">Has Ganado</h3>

        <button
          onClick={() => {
            setGanador(false);
          }}
          className="p-2 rounded-lg text-zinc-400 bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-200 hover:scale-110 transition-all"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}