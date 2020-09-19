import React from "react";
import Portal from "../../portal/portal";
import "./modal.scss"

export const Modal = (props) => {
    return (
        <>
            {props.isOpen && <Portal>
                <div className="modal-container">
                    <div className="modal-container_window">
                        {props.children}
                    </div>
                </div>
            </Portal>
            }
        </>
    )
};
