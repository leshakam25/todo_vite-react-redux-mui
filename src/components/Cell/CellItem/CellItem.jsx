import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch } from "react-redux";
import {
  removeCell,
  toggleCellArchieved,
  toggleCellCompleted,
} from "../../../store/cellSlice";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CellItem = ({ id, date, text, completed, archieved }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <ButtonGroup>
          <Button
            size="small"
            color={!completed ? "success" : "primary"}
            variant="text"
            onClick={() => dispatch(toggleCellCompleted({ id }))}
          >
            {!completed ? <RadioButtonUncheckedIcon /> : <TaskAltIcon />}
          </Button>

          <Button
            size="small"
            color={!archieved ? "success" : "primary"}
            variant="text"
            onClick={() => dispatch(toggleCellArchieved({ id }))}
          >
            {!archieved ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
          </Button>

          <Button
            color="error"
            size="small"
            variant="text"
            onClick={() => dispatch(removeCell({ id }))}
          >
            <DeleteOutlineIcon />
          </Button>
        </ButtonGroup>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() => dispatch(toggleTodoCompleted({ id }))}
        dense
      >
        <ListItemText
          primary={<Typography variant="body1">{date}</Typography>}
          secondary={<Typography variant="body2">{text}</Typography>}
        />
        <Box
          sx={{
            display: "block",
            minWidth: "80px",
            mx: 1,
          }}
        ></Box>
      </ListItemButton>
    </ListItem>
  );
};

export default CellItem;
