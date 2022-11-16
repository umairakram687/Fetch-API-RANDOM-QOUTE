import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavHeader from "./Pages/NavHeader";
import RandomQoute from "./Pages/RandomQoute";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavHeader />} />
        <Route path="/randomqoute" element={<RandomQoute />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
