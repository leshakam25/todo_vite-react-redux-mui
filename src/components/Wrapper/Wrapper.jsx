import { CardMedia, Grid, Typography } from "@mui/material";
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
    <>
      <Header />
      <Grid container>
        <Grid margin="0 auto" item xs={12} sm={8} md={6} lg={4}>
          <CellForm />
          <Box
            sx={{
              width: "100%",
            }}
          >
            {status === "loading" && (
              <>
                <Typography variant="h4">Статус загрузки: {status}</Typography>
                <CardMedia color="primary" component="img" src={loading} />
              </>
            )}
            {error && (
              <Box>
                <Typography color="error" variant="h4">
                  Ошибка: {error}
                </Typography>
                <ErrorOutlineIcon
                  color="error"
                  sx={{
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
    </>
  );
}

export default Wrapper;
