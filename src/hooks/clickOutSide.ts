import { useState, useEffect, useRef } from "react";

interface UseClickOutSide {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLDivElement>;
}

const useClickOutSide = (): UseClickOutSide => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  return { isOpen, setIsOpen, modalRef };
};

export default useClickOutSide;
