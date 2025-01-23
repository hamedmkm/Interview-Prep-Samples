import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Pages/NavBar/NavBar";
import Home from "../Pages/Home/Home";
import SumNumberComponent from "../Pages/SumNumberExam/SumNubmerExam";
import TodoList from "../Pages/TodoList/TodoList";
import NameFilter from "../Pages/FliterArray/FilterArray";
import Tabs from "../Pages/Tabs/Tabs";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-400">
    <Router>
      <Navbar />
      <div className=" mx-auto mt-4 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SumNumberComponent" element={<SumNumberComponent />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/NameFilter" element={<NameFilter />} />
          <Route path="/Tabs" element={<Tabs />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
