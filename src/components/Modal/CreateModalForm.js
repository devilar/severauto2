import Modal from "react-bootstrap/Modal";
import Button from "../Ui/CustomButtons/Button";
import React from "react";
import EmployerCreateForm from "../PageForms/EmployerCreateForm/EmployerCreateForm";

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
                    Создание пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding:'20px 60px 40px 40px'}}>
              <EmployerCreateForm onhide={props.onHide}/>
            </Modal.Body>

        </Modal>
    );
}

export default CreateModalForm;