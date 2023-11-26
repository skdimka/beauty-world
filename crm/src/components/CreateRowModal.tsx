import React, { useEffect, useState } from 'react';

import {Box, Button, Typography, Modal} from '@mui/material/';
import { styled, InputLabel, MenuItem, FormControl, Select, InputBase } from '@mui/material/';

import servicesApi from '../common/api/servicesApi';
import mastersApi from '../common/api/MastersApi';
import customersApi from '../common/api/CustomersApi';
import ordersApi from '../common/api/OrdersApi';

import { ICustomer, IMaster, IService } from '../common/interfaces/IOrder';


interface ICreateRow {
    onApply: () => void;

}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 100px 10px 120px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '"Segoe UI"',
        'Roboto',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateRowModal(props: ICreateRow) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentService, setService] = useState<IService | undefined>();
  const [currentMaster, setMaster] = useState<IMaster | undefined>();
  const [currentCustomer, setCustomer] = useState<ICustomer | undefined>();
  const [currentTime, setTime] = useState("");


  const [services, setServices] = useState<IService[]>([]);
  const [masters, setMasters] = useState<IMaster[]>([]);
  const [customers, setCustomers] = useState<ICustomer[]>([])

  const fetchServices = () => {
    servicesApi.getAll().then(result => setServices(result));
  }

  const fetchMasters = () => {
    mastersApi.getAll().then(result => setMasters(result));
  }

  const fetchCustomers = () => {
    customersApi.getAll().then(result => setCustomers(result));
  }

  useEffect(()=>{fetchServices(); fetchMasters(); fetchCustomers()}, []);


  const createClient = () => {
    ordersApi.create({
      masterId: currentMaster!.id,
      name: currentCustomer!.fullName,
      phone: currentCustomer!.phone,
      serviceId: currentService!.id,
      visitDate: currentTime
    }).then(() => props.onApply())
  }

  return (
    <>
      <Box>
        <Button onClick={handleOpen}>Добавить запись</Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Создание новой записи
          </Typography>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>Услуга{currentService && `: ${currentService.name}`}</Typography>
        <FormControl sx={{ m: 1 }} variant="standard">
                 <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    input={<BootstrapInput />}
                >
                    <MenuItem ><em>Не выбрано</em></MenuItem>
                        {services.map(service =>
                            <MenuItem 
                                onClick={() => setService(service)} key={service.id}>
                                    {service.name}
                            </MenuItem>)}
                </Select>
            </FormControl>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>Мастер{currentMaster && `: ${currentMaster.fullName}`}</Typography>
        <FormControl sx={{ m: 1 }} variant="standard">
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<BootstrapInput />} 
                >
                    <MenuItem ><em>Не выбрано</em></MenuItem>
                        {masters.map(master =>
                            <MenuItem 
                                onClick={() => setMaster(master)} key={master.id}>
                                    {master.fullName}
                            </MenuItem>)}
                    
                </Select>
      </FormControl>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>ФИО клиента{currentCustomer && `: ${currentCustomer.fullName}`}</Typography>
        <FormControl sx={{ m: 1 }} variant="standard">
            <Select 
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                input={<BootstrapInput />}
            >
                    <MenuItem ><em>Не выбрано</em></MenuItem>
                        {customers.map(customer => 
                            <MenuItem 
                                onClick={() => setCustomer(customer)} key={customer.id}>
                                    {customer.surName} {customer.firstName} {customer.patronymic}
                            </MenuItem>)}
            </Select>
      </FormControl>

            <Box>    
                <InputLabel htmlFor="demo-customized-select-native">Выбрать время</InputLabel>         
                <input type="datetime-local" onChange={(event) => setTime(event.target.value)}></input>
            </Box>

            <Box>
                <Button onClick={() => { createClient(); }}>Добавить</Button>
            </Box>
                <Button onClick={() => { handleClose() }}>Закрыть</Button>
        </Box>
      </Modal>
    </>
  );
}
