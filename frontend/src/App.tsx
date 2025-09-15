import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
