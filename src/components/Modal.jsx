import React from "react";

const Modal = ({ onClose }) => {

    const handleDelete = () => {
        onClose();
    };

    return (

        <div className="modal d-block">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={onClose}>
                            Oh no!
                        </button>
                        <button className="btn btn-secondary" onClick={handleDelete}>
                            Yes baby!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal