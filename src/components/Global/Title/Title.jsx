import { Typography } from "@mui/material";
import React from "react";

const Title = ({ text }) => {
  return (
    <Typography
      fontFamily="Mulish"
      fontWeight="700"
      color="#CBF7ED"
      fontSize={{
        xs: 14,
        md: 22,
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
