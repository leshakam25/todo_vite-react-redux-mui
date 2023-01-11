import { Box, Container } from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth={false}>
        <MainPage />
      </Container>
    </>
  );
}

export default App;
