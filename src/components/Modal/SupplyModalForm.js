import Modal from "react-bootstrap/Modal";
import React from "react";
import supplyStore from "../../store/supplyStore";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import Grid from '@mui/material/Grid';

const SupplyModalForm = (props) =>{



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

                <div className="supply-inner-info">
                    <h3 className='supply-inner-title' style={{textAlign:'center',fontWeight:'400'}}>Договор: № 5433434542 от 01.02.2021</h3>
                    <Grid container xs={12} justifyContent="center" style={{marginTop:'20px'}}>
                        <Grid container xs={6}>
                            <Grid item xs={6}>
                                <div style={{textAlign:'center'}}>Менеджер: Филатов Дмитрий Алексеевич</div>
                                <div style={{textAlign:'center'}}>Валюта договора: Доллары</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{textAlign:'center'}}>Сумма договора в рублях: 142 000</div>
                                <div style={{textAlign:'center'}}>Сумма договора в валюте: 2000</div>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>


                <Table style={{marginTop:'40px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>RN товара</TableCell>
                            <TableCell>Тип товара</TableCell>
                            <TableCell>Наименование</TableCell>
                            <TableCell>Количество</TableCell>
                            <TableCell>Цена за ед. в валюте</TableCell>
                            <TableCell>Цена за ед. в рублях</TableCell>
                            <TableCell>Дата поставки</TableCell>
                            <TableCell>Склад</TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>


                        {supplyStore.innerResult.map(elem=>(
                                <TableRow key={elem.id}>

                                    <TableCell>{elem.itemRn}</TableCell>
                                    <TableCell>{elem.itemType}</TableCell>
                                    <TableCell>{elem.itemTitle}</TableCell>
                                    <TableCell>{elem.quantity}</TableCell>
                                    <TableCell>{elem.valutePrice}</TableCell>
                                    <TableCell>{elem.rubValutePrice}</TableCell>
                                    <TableCell>{elem.supplyDate}</TableCell>
                                    <TableCell>{elem.stockName}</TableCell>

                                </TableRow>
                            )
                        )}


                    </TableBody>
                </Table>


            </Modal.Body>
        </Modal>
    );
}

export default SupplyModalForm;