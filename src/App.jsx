import { CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TodoForm from "./components/Todos/TodoForm/TodoForm";
import TodoList from "./components/Todos/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./store/todoSlice";
// import TodoModalButton from "./components/Todos/TodoModalButton/TodoModalButton";
import loading from "./images/loading.svg";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import errorGif from "./images/errorGif.gif";
import { Box } from "@mui/system";
import Header from "./components/Header/Header";

errorGif;

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
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
      <Grid container sx={{ mt: 8 }}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{
            background: "rgba(35, 57, 91)",
            p: 2,
            m: "0 auto",
            my: 2,
            color: "#CBF7ED",
          }}
        >
          {/* <TodoModalButton /> */}
          <TodoForm />
          <Box
            sx={{
              width: "100%",
            }}
          >
            {status === "loading" && (
              <>
                <Typography align="center" fontSize={24} fontWeight="bold">
                  Стату загрузки: "{status}"
                </Typography>
                <CardMedia component="img" src={loading} />
              </>
            )}
            {error && (
              <Box>
                <Typography align="center" fontSize={24} fontWeight="bold">
                  Ошибка загрузки данных: "{error}"
                </Typography>
                {/* <CardMedia component="img" src={errorGif} /> */}
                <ErrorOutlineIcon
                  sx={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            )}
          </Box>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
