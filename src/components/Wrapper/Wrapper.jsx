import { CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCell } from "../../store/cellSlice";
import loading from "../../images/loading.svg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box } from "@mui/system";
import Header from "../Header/Header";
import CellForm from "../Cell/CellForm/CellForm";
import CellList from "../Cell/CellList/CellList";

function Wrapper() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.cell);
  useEffect(() => {
    dispatch(fetchCell());
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        bgcolor: "#161925",
      }}
    >
      <Header />
      <Grid container sx={{ mt: { xs: 6, sm: 8 } }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          sx={{
            background: "rgba(35, 57, 91)",
            p: 2,
            m: "0 auto",
            my: 2,
            color: "#CBF7ED",
          }}
        >
          <CellForm />
          <Box
            sx={{
              width: "100%",
            }}
          >
            {status === "loading" && (
              <>
                <Typography
                  sx={{
                    align: "center",
                    fontSize: "24",
                    fontWeight: "bold",
                    color: "#06d6a0",
                  }}
                >
                  Статус загрузки: <br />
                  {status}
                </Typography>
                <CardMedia
                  component="img"
                  src={loading}
                  sx={{ color: "#06d6a0" }}
                />
              </>
            )}
            {error && (
              <Box>
                <Typography
                  sx={{
                    align: "center",
                    fontSize: "24",
                    fontWeight: 700,
                    color: "#ef476f",
                  }}
                >
                  Ошибка: <br /> {error}
                </Typography>
                <ErrorOutlineIcon
                  sx={{
                    color: "#ef476f",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            )}
          </Box>
          {status === "resolved" && <CellList />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Wrapper;
