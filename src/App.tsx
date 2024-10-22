import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/contests" element={<div>test 12234</div>} />
        <Route path="/contests/:id" element={<div>test 12234</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
