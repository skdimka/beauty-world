import React from 'react';

import {Box, ButtonGroup, Button, Typography, Modal} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function DeleteRowModal(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <DeleteIcon 
            onClick={() => {
                handleOpen();
                props.onOrder();
            }}
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Вы хотите безвозвратно удалить запись?
          </Typography>

            <Box>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                >
                        <Button onClick={props.onAction}>Подтвердить</Button>
                </ButtonGroup>
            </Box>
                <Button onClick={handleClose}>Отмена</Button>
        </Box>
      </Modal>
    </>
  );
}
