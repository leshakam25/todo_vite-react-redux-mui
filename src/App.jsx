import { CardMedia, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./store/todoSlice";
import TodoModalButton from "./components/TodoModalButton/TodoModalButton";
import duck from "./images/duck.gif";
import errorGif from "./images/errorGif.gif";
import { Box } from "@mui/system";

errorGif;

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={12} sm={6} lg={4}>
          <TodoModalButton />
          <TodoForm />
          <Box
            sx={{
              width: "100%",
            }}
          >
            {status === "loading" && (
              <>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  {status}
                </Typography>
                <CardMedia component="img" src={duck} />
              </>
            )}
            {error && (
              <>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  {error}
                </Typography>
                <CardMedia component="img" src={errorGif} />
              </>
            )}
          </Box>
          <TodoList />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
