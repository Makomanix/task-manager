import { useRef, useImperativeHandle, forwardRef } from "react"
import { createPortal } from "react-dom";
import Button from "./Button";


const Modal = forwardRef(function Modal({ children, confirmDelete, }, ref) {
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
      <form method="dialog" className="flex flex-row justify-end">
        <Button>Close</Button>
        {confirmDelete && <Button onClick={confirmDelete}>Confirm</Button>}
      </form>
    </dialog>, document.getElementById('modal-root')
  );
});

export default Modal