import React from 'react';
interface ModalProps  {
    children: React.ReactNode
    title: string
}

const Modal = ({children, title}: ModalProps) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default Modal;