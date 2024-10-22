import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import License from "./components/License";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Main" element={<Main />} />
        <Route path="/contests" element={<div>test 12234</div>} />
        <Route path="/contests/:id" element={<div>test 12234</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
