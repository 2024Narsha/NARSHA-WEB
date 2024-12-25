import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import License from "./pages/License";
import WritePage from "./pages/ContentWrite";

import PostDetail from "./components/PostDetail";
import CategoryList from './pages/CategoryList/CategoryList';

import StartPage from "./pages/StartPage";
import ApplyPage from "./pages/ApplyPage";
import Volunteer from './pages/Volunteer/volunteer';
import VolunterWrite from "./pages/VolunteerWrite";

import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import SongApply from "./pages/SongApply";
import StoryApply from "./pages/StoryApply";
import Students from "./pages/Studenets";
import StudentsPostDetail from "./pages/StudentsPostDetail";
import LicenseWrite from "./pages/LicenseWrite";
import ApplicatedBox from "./components/ApplicatedBox";
import SearchResults from "./pages/SearchResults/SearchResults";
import JoinedList from "./pages/ApplicateList";


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

          <Route path="/contests/write" element={<WritePage />} />

          <Route path="/license" element={<License />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/apply-page" element={<ApplyPage />} />
          <Route path="/volunter-write" element={<VolunterWrite/>}/>
          <Route path="/song-apply" element={<SongApply />} />
          <Route path="/story-apply" element={<StoryApply />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students-post-detail" element={<StudentsPostDetail />} />
          <Route path="/license/write" element={<LicenseWrite/>}/>

          <Route path="/posts/:id" element={<PostDetail />}/>

          <Route path="/search/keyword/:keyword" element={<SearchResults />} />
          <Route path="/search/category/:categoryId" element={<SearchResults />} />

          <Route path="/joined-list" element={<JoinedList />}/>

        </Route>

        <Route path="/start-page" element={<StartPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
