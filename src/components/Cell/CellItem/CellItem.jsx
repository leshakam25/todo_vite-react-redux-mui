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
        <ButtonGroup
          sx={{
            bgcolor: "#161925",
            opacity: 0.8,
          }}
        >
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
          primary={
            <Typography
              sx={{
                fontFamily: "Mulish",
                lineHeight: "130%",
                fontWeight: "400",
                opacity: 0.5,
                textAlign: "left",
                fontSize: 16,
              }}
            >
              {date}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                fontSize: 14,
                textAlign: "left",
                lineHeight: "130%",
                fontFamily: "Mulish",
                fontWeight: "300",
              }}
            >
              {text}
            </Typography>
          }
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
