import Modal from "react-bootstrap/Modal";
import React from "react";
import supplyStore from "../../store/supplyStore";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Grid from '@mui/material/Grid';

const ContractsModalForm = (props) =>{



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

                Информация по складам

            </Modal.Body>
        </Modal>
    );
}

export default ContractsModalForm;