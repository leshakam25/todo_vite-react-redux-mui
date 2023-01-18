import { Modal, Button, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import CellForm from "../CellForm/CellForm";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CloseIcon from "@mui/icons-material/Close";

export default function CellFormModalButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          my: 1,
          color: { xs: "black", md: "#CBF7ED" },
        }}
        variant="text"
        size="small"
        onClick={handleOpen}
      >
        <PlaylistAddIcon />{" "}
        <Typography
          sx={{
            fontSize: 14,
            fontFamily: "Mulish",
            fontWeight: 500,
          }}
        >
          &nbsp;Добавить
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
            bgcolor: "#161925",
            boxShadow: 24,
            py: 4,
            px: 2,
          }}
        >
          <CellForm />
          <IconButton
            sx={{ position: "absolute", right: 8, top: 8 }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                color: "#CBF7ED",
              }}
            />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}
