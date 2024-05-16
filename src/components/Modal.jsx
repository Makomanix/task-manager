import { useRef, useImperativeHandle, forwardRef } from "react"
import { createPortal } from "react-dom";


const Modal = forwardRef(function Modal({ children, buttonLabel }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      } 
    }
  }, [])

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-gray-800/90 p-10 rounded-md shadow-md text-xl font-semibold">
      {children}
      <form method="dialog" className="flex justify-end">
        <button className="bg-black text-white rounded-md px-4 py-1 mt-6 border-stone-300 focus: focus:ring focus:ring-gray-500 hover:ring hover:ring-gray-500 hover:bg-gray-500">{buttonLabel}</button>
      </form>
    </dialog>, document.getElementById('modal-root')
  );
});

export default Modal