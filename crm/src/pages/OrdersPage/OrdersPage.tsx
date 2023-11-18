import { useEffect, useState } from "react";

import ordersApi from "../../common/api/OrdersApi";
import { IOrder } from "../../common/interfaces/IOrder";

import {Button, ButtonGroup, Box} from '@mui/material/';
import {Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper} from '@mui/material/';

import moment from "moment";


export const OrdersPage = () => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    
    const fetchOrders = () => {
        ordersApi.getAll().then(result => setOrders(result));
    }

    useEffect(fetchOrders, [])

    const [sortType, setSort] = useState(0);

    const sortTyped = (array: IOrder[]) => {
        switch (sortType) {
            case 0:
                return array.sort((a, b) => new Date(a.visitDate).getTime() - new Date(a.visitDate).getTime());
            case 1:
                return array.sort((a, b) => a.status.localeCompare(b.status))
            default:
                return array.sort((a, b) => a.customer.fullName.localeCompare(b.customer.fullName));
        }
    };

    return (<>
         <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start', 
            '& > *': {m: 1,},
            }}>
            
            <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button onClick={() => setSort(0)}>По дате</Button>
                <Button onClick={() => setSort(1)}>По статусу</Button>
                <Button onClick={() => setSort(2)}>По ФИО</Button>
             </ButtonGroup>
        </Box>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

            <TableHead>
                <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell>Услуга</TableCell>
                    <TableCell >ФИО мастера</TableCell>
                    <TableCell >ФИО Клиента</TableCell>
                    <TableCell >Дата создания</TableCell>
                    <TableCell >Время визита</TableCell>
                    <TableCell >Статус</TableCell>
                </TableRow>
            </TableHead>


        <TableBody>
          {sortTyped(orders).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell>
                    {row.service.name}
                </TableCell>
                <TableCell>
                    {row.master.surName + " "}
                    {row.master.firstName + " "}
                    {row.master.patronymic}
                </TableCell>
                <TableCell>
                    {row.customer.surName + " "}
                    {row.customer.firstName + " "}
                    {row.customer.patronymic}
                </TableCell>
                <TableCell>
                    {moment(row.createdDate).locale('ru').format(`LLL`)}
                </TableCell>
                <TableCell>
                    {moment(row.visitDate).locale('ru').format(`LLL`)}
                </TableCell>
                <TableCell>
                    {row.status}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
 </TableContainer>
    </>);
}