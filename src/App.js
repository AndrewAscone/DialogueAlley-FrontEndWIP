import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SearchHandle from "./components/SearchHandle";
import SearchHashtag from "./components/SearchHashtag";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/searchHandle/:handle" element={<SearchHandle/>}/>
        <Route path="/searchHashtag/:hashtag" element={<SearchHashtag/>}/>
      </Routes>
    </div>
  );
}

export default App;
