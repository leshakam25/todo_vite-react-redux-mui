import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Picker({ date, onChangeFunc }) {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        ampm={false}
        renderInput={(props) => <TextField {...props} />}
        label="Дата"
        value={date}
        onChange={onChangeFunc}
      />
    </LocalizationProvider>
  );
}
