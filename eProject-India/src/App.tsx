import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/ContactPage";
import BlogDetails from "./pages/BlogDetails";
import TestPage from "./pages/TestPage";
import ActivityDetails from "./pages/ActivityDetails";
import ItineraryDetails from "./pages/ItineraryDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<TestPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/activity/:id" element={<ActivityDetails />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
