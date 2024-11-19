import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import License from "./pages/License";
import WritePage from "./pages/contentWrite";
import PreviewList from "./components/PreviewList";
import PostDetail from "./components/PostDetail";
import CategoryList from './pages/CategoryList/CategoryList';
import CategoryResults from "./pages/CategoryResults/CategoryResults";
import StartPage from "./pages/StartPage";
import ApplyPage from "./pages/ApplyPage";
import Volunteer from './pages/Volunteer/volunteer';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ApplyDetail from "./components/ApplyDetail";
import SongApply from "./pages/SongApply";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Main />} />
          <Route path="/contests" element={<div>test 12234</div>} />
          <Route path="/contests/:id" element={<div>test 12234</div>} />
          <Route path="/contests/write" element={<WritePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/license" element={<License />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/category-results" element={<CategoryResults />} />
          <Route path="/post-detail" element={<PostDetail />} />
          <Route path="/apply-page" element={<ApplyPage />} />
          <Route path="/previewList" element={<PreviewList />} /> {/* 이거 삭제해야 함 */}
          <Route path="/song-apply" element={<SongApply />} />

        </Route>

        <Route path="/start-page" element={<StartPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
