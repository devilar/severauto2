import Modal from "react-bootstrap/Modal";
import Button from "../Ui/CustomButtons/Button";
import React from "react";
import EmployerCreateForm from "../EmployerCreateForm/EmployerCreateForm";

const CreateModalForm = (props) =>{

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Профиль пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               test!
            </Modal.Body>
            <Modal.Footer>
                <Button color='primary' onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateModalForm;