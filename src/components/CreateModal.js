import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';

function CreateModal({ onClose, children, actionBar }) {
  const useDesktop = useMediaQuery({ query: '(min-width: 600px)' });

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  let classNames = "fixed p-10 bg-white ";
  if (useDesktop) {
    classNames += "inset-40"
  } else {
    classNames += "inset-10"
  }

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className={classNames}>
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default CreateModal;
