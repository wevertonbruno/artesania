import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./styled";
import { Card, CardBody } from "../card";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode | JSX.Element | JSX.Element[] | undefined;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<boolean>(isOpen);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <Styled.Container ref={modalRef} onClose={handleClose}>
      <Card>
        <CardBody>{children}</CardBody>
      </Card>
    </Styled.Container>
  );
}

export default Modal;
