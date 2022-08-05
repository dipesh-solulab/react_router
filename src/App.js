import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import HeaderComan from "./components/HeaderComan";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //nested Router and Shared Layout to aonther page */}
        <Route path="/" element={<HeaderComan/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
