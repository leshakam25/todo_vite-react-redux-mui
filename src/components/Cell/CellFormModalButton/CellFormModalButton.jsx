import {
  Modal,
  Button,
  Box,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import React from "react";
import CellForm from "../CellForm/CellForm";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";

export default function CellFormModalButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button color="inherit" size="small" onClick={handleOpen}>
        <PlaylistAddIcon /> <Typography>&nbsp;Добавить</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CellForm />
          <IconButton
            sx={{ position: "absolute", right: 8, top: 8 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
