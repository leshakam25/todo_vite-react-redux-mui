import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    style: {
      fonts: {
        logo: {
          fontFamily: "Architects Daughter",
          fontSize: 32,
          color: "white",
          textDecoration: "none",
          mr: 2,
        },
        main: { font: "Mulish", color: "#CBF7ED" },
        title: {
          fontFamily: "Mulish",
          fontWeight: "500",
          color: "#CBF7ED",
          fontSize: {
            xs: 14,
            md: 22,
          },
        },
        button: {
          button: { my: 1, color: { xs: "black", md: "#CBF7ED" } },
          buttonTitle: { fontSize: 14, fontFamily: "Mulish", fontWeight: 500 },
        },
        text: {
          fontFamily: "Mulish",
          fontSize: 14,
          textAlign: "left",
          fontWeight: "300",
          lineHeight: "130%",
        },
        date: {
          fontFamily: "Mulish",
          fontSize: 16,
          textAlign: "left",
          fontWeight: "400",
          lineHeight: "130%",
          opacity: 0.5,
        },
      },
      background: {
        main: {
          dark: "#161925",
        },
        cell: {
          dark: "#23395B",
        },
        form: {
          dark: "#8EA8C3",
        },
      },
    },
  },
});
export default styleSlice.reducer;
