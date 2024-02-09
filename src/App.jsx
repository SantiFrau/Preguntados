import Provedor from "../src/components/proveedor_contexto"
function App() {


  return (
    <>
    <div className="fixed top-0 z-[-2] h-full md:h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
     <div className="flex flex-col items-center w-full h-screen max-h-full">
	<Provedor >
    
	</Provedor>
    </div>
    </>
  )
}

export default App
