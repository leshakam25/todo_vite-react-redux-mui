import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    style: {
      pallete: {
        dark: {
          main: "#161925",
          primary: "#23395B",
          secondary: "#406E8E",
          form: "#8EA8C3",
          text: "#CBF7ED",
        },
      },
      fonts: {
        logo: {
          fontFamily: "Architects Daughter",
          fontSize: 32,
          display: { xs: "none", md: "flex" },
          color: "#CBF7ED",
          textDecoration: "none",
          mr: 2,
        },
        logoMobile: {
          fontFamily: "Architects Daughter",
          fontSize: 24,
          display: { xs: "flex", md: "none" },
          color: "#CBF7ED",
          textDecoration: "none",
          mr: 2,
          flexGrow: 1,
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
      header: {
        openMenu: {
          fontFamily: "Mulish",
          fontWeight: "300",
          textAlign: "center",
          color: "#CBF7ED",
          background: "#8EA8C3",
        },
      },
      form: {
        main: {
          display: "flex",
          flexDirection: "row",
          gap: 1,
          my: 1,
          bgcolor: "rgba(142, 168, 195,0.4)",
          p: 2,
          width: "100%",
          ml: -2,
        },
      },
      cell: {
        background: "rgba(35, 57, 91)",
        p: 2,
        m: "0 auto",
        my: 2,
        color: "#CBF7ED",
      },
      statuses: {
        loading: {
          text: {
            align: "center",
            fontSize: "24",
            fontWeight: "bold",
            color: "#06d6a0",
          },
          animation: { color: "#06d6a0" },
        },
        error: {
          text: {
            align: "center",
            fontSize: "24",
            fontWeight: "bold",
            color: "#ef476f",
          },
          logo: {
            color: "#ef476f",
            width: "100%",
            height: "100%",
          },
        },
      },
    },
  },
});
export default styleSlice.reducer;
