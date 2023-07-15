import React, {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

interface Props extends PropsWithChildren {
  onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ onClose, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const useOnClickOutside = (
    ref: React.RefObject<HTMLDivElement>,
    handler: Function
  ) => {
    useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(ref, onClose);

  return (
    <div className="fixed min-w-[70%] top-14 z-50">
      <div className="bg-slate-100 p-4 w-min md:w-full" ref={ref}>
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
