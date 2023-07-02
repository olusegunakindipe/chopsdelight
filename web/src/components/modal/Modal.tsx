import React, { MouseEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClose: MouseEventHandler<HTMLDivElement>;
}
const Modal = ({ onClose, children }: Props) => {
  return (
    <div className="fixed inset-[10.25rem]">
      <div className="bg-slate-100 py-8 px-4">
        <div className="absolute right-4 z-50 cursor-pointer" onClick={onClose}>
          <svg
            className="h-8 w-8 text-black font-700"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
