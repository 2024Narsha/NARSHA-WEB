import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import License from "./pages/License";
import OptionBar from "./components/OptionBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contests" element={<div>test 12234</div>} />
        <Route path="/contests/:id" element={<div>test 12234</div>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/license" element={<License />} />
        <Route path="/optionBar" element={<OptionBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
