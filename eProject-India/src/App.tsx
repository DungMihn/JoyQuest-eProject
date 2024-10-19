import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage";
import ItineraryPage from "./pages/ItineraryPage";
import ItineraryDetails from "./pages/ItineraryDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
