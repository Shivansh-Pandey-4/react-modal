import Modal from "./components/Modal"
import { useState } from "react"

function App() {

  const [isOpen, setIsOpen] = useState(false); 

  return (
   <div className="h-screen gap-6 bg-black text-white flex flex-col items-center">
     <h1 className="text-5xl">Popup Modal</h1>
     <button onClick={()=>setIsOpen(true)} className="px-3 py-1 cursor-pointer hover:bg-purple-700 bg-purple-600 text-xl rounded-lg">Get the eBook</button>
     <Modal isOpen={isOpen} onClose = {()=>setIsOpen(false)}/>
   </div>
  )
}

export default App
