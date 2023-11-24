import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { Card, CardBody } from "../card";
import { useOutsideClick } from "../../hooks";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode | JSX.Element | JSX.Element[] | undefined;
  size?: "sm" | "lg" | "xl";
}

function Modal({ isOpen, onClose, children, size }: ModalProps) {
  const [open, setOpen] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDialogElement>(null);

  const bodyRef = useOutsideClick<HTMLDivElement>(() => {
    if (!open) {
      return;
    }
    setOpen(false);
    onClose();
  });

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <Styled.Container
      ref={modalRef}
      onClose={handleClose}
      className={`modal-${size || "lg"}`}
    >
      <div ref={bodyRef} className="modal-content">
        <Card>
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </Styled.Container>
  );
}

export default Modal;
