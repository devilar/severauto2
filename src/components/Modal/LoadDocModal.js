import Modal from "react-bootstrap/Modal";
import React from "react";
import supplyStore from "../../store/supplyStore";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";

const LoadDocModel = (props) =>{



    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Загрузка
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{padding:'40px 60px 40px 40px'}}>

                <Button
                    variant="contained"
                    component="label"
                >
                    Загрузить файл
                    <input
                        type="file"
                        hidden
                    />
                </Button>

            </Modal.Body>
        </Modal>
    );
}

export default LoadDocModel;