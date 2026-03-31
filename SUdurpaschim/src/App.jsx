import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Culture from "./pages/Culture";
import AboutRegion from "./pages/AboutRegion";
import TravelGuide from "./pages/TravelGuide";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route
            path="/destinations/:destinationId"
            element={<DestinationDetail />}
          />
          <Route path="/culture" element={<Culture />} />
          <Route path="/about-region" element={<AboutRegion />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
