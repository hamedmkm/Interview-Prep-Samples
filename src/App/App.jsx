import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Pages/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import SumNumberComponent from "../Pages/SumNumberExam/SumNubmerExam";
import TodoList from "../Pages/TodoList/TodoList";
import NameFilter from "../Pages/FliterArray/FilterArray";
import Tabs from "../Pages/Tabs/Tabs";
import Loader from "../Pages/Loader/Loader";
import UsersList from "../Pages/GetAPi/GetAPIUserList";
import RegistrationForm from "../Pages/RegisterisionEmail/RegisterisionEmail";
import ImageGallery from "../Pages/GetGallaryAPI/ImageGallery";
import Time from "../Pages/Time/Time";
import Weather from "../Pages/Weather/Weather";
import RandomQuote from "../Pages/RandomQuote/RandomQuote";
import VisitorCounter from "../Pages/VisitorCounter/VisitorCounter";
import CurrentTime from "../Pages/CurrentTime/CurrentTime";
import Poll from "../Pages/Poll/Poll";
import MusicPlayer from "../Pages/Music/MusicList";
import YouTubeSearch from "../Pages/YoutubeSearch/YoutubeSearch";
import MyGoogleMap from "../Pages/googleMap/GoogleMap";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400">
      <Router>
        <Navbar />
        <div className=" mx-auto mt-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/SumNumberComponent"
              element={<SumNumberComponent />}
            />
                <Route path="/YouTubeSearch" element={<YouTubeSearch />} />
            <Route path="/MyGoogleMap" element={<MyGoogleMap />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/NameFilter" element={<NameFilter />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/UsersList" element={<UsersList />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            
            <Route path="/Tabs" element={<Tabs />} />
            <Route path="/Loader" element={<Loader />} />
         
            <Route path="/ImageGallery" element={<ImageGallery />} />
            <Route path="/Time" element={<Time />} />
         
            <Route path="/RandomQuote" element={<RandomQuote />} />
        
            <Route path="/CurrentTime" element={<CurrentTime />} />
            <Route path="/poll" element={<Poll />} />
            <Route path="/MusicPlayer" element={<MusicPlayer />} />
        
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
