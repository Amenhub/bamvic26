import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Event from "./pages/Event";
import Programme from "./pages/Programme";
import Gallery from "./pages/Gallery";
import Bridal from "./pages/Bridal";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/event" element={<Event />} />
          <Route path="/bridal-train" element={<Bridal />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}