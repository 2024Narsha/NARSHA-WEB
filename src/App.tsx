import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { dividerClasses } from "@mui/material";
import WritePage from "./components/Write";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contests" element={<div>test 12234</div>} />
        <Route path="/contests/:id" element={<div>test 12234</div>} />
        <Route path="Write" element={<WritePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
