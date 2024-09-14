import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Modal({ open, onClose, children }) {
  return createPortal(
    <>
      {open && (
        <div className=" grid  place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40 ">
          <div className=" relative z-50 min-h-[200px] min-w-[80%] bg-white mx-auto  ">
            <div className="flex justify-end">
              <AiOutlineCloseCircle onClick={onClose} className="text-2xl " />
            </div>
            {children}
          </div>
          
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
