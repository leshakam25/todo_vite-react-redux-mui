import { Modal, Button, Box, Typography } from "@mui/material";
import React from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";

export default function AddTodoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          color: { xs: "black", md: "white" },
        }}
        variant="text"
        size="small"
        onClick={handleOpen}
      >
        <PlaylistAddIcon />{" "}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            display: { xs: "none", md: "block" },
          }}
        >
          &nbsp;Добавить дело
        </Typography>
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
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <AddTodoForm />
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", right: -14, top: 0 }}
          >
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
