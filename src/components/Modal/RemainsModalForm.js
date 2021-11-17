import Modal from "react-bootstrap/Modal";
import React from "react";


const RemainsModalForm = (props) =>{



    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Поставки
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding:'40px 60px 40px 40px'}}>

                Информация по остаткам

            </Modal.Body>
        </Modal>
    );
}

export default RemainsModalForm;