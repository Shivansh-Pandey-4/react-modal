import { useRef } from "react";

const Modal = ({isOpen, onClose}: {isOpen: boolean, onClose: ()=>void})=>{

    const myRef = useRef(null);

    function closeMethod(e:  React.MouseEvent<HTMLDivElement, MouseEvent>){ 
         if(myRef.current == e.target){
              onClose();
         }
    }

    return (
        <>
        {
            isOpen ? <div ref={myRef} onClick={closeMethod} className="fixed flex items-center justify-center inset-0 backdrop-opacity-80 backdrop-blur-sm">
            <div className="w-md flex flex-col">
                <button onClick={()=>{onClose();}} className="bg-red-300 hover:bg-red-500 cursor-pointer px-2 py-1 rounded-lg m-2 place-self-end">Close it.</button>
             <div className="border rounded-lg bg-indigo-400 h-50 p-5">
                 <h1>This is the modal components.</h1>
            </div>
         </div>
            </div> : null
        }
        </>
    )
}

export default Modal;