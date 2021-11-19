import Modal from "react-bootstrap/Modal";
import Button from "../Ui/CustomButtons/Button";
import React from "react";
import EmployerCreateForm from "../PageForms/EmployerCreateForm/EmployerCreateForm";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileModalInfo from "./ProfileModalInfo";
import createUserRoleStore from "../../store/createUserRoleStore";
import {observer} from "mobx-react-lite";

const CreateModalForm = observer((props) =>{

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
                <Modal.Body style={{padding:'40px 60px 40px 40px'}}>
                    <ProfileModalInfo id={props.id}/>
                </Modal.Body>
            </Modal>

    );
})

export default CreateModalForm;