import Home from "pages/Home";
import Video from "pages/Video";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default App;
