import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/ContactPage";
import BlogDetails from "./pages/BlogDetails";
import ActivityDetails from "./pages/ActivityDetails";
import ItineraryPage from "./pages/ItineraryPage";
import ItineraryDetails from "./pages/ItineraryDetails";
import Home from "./pages/HomePage";
import D_ticker from "./components/D_Ticker";
import D_IndoorPage from "./pages/D_IndoorPage";
import D_FamilyPage from "./pages/D_FamilyPage";
import D_KidsPage from "./pages/D_KidsPage";
import D_OutdoorPage from "./pages/D_OutdoorPage";
import D_FemalesPage from "./pages/D_FemalesPage";
import D_MalesPage from "./pages/D_MalesPage";
import D_BlogPage from "./pages/D_BlogPage";
import D_ScrollProgress from "./components/D_ScrollProgress";
import D_FixedScrollIcons from "./components/D_FixedScrollIcons";

const App = () => {
  return (
    <div className="relative">
      {/* Thành phần cố định */}
      <div className="fixed top-0 left-0 w-full z-50">
        <D_ticker />
        <D_ScrollProgress />
      </div>

      <div className="fixed bottom-36 right-4 flex flex-col space-y-3 z-50">
        <D_FixedScrollIcons />
      </div>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/activity/:id" element={<ActivityDetails />} />
          <Route path="/itinerary" element={<ItineraryPage />} />
          <Route path="/itinerary/:id" element={<ItineraryDetails />} />
          <Route path="/activities/indoor-games" element={<D_IndoorPage />} />
          <Route path="/activities/family-games" element={<D_FamilyPage />} />
          <Route path="/activities/females-games" element={<D_FemalesPage />} />
          <Route path="/activities/kids-games" element={<D_KidsPage />} />
          <Route path="/activities/males-games" element={<D_MalesPage />} />
          <Route path="/activities/outdoor-games" element={<D_OutdoorPage />} />
          <Route path="/blog" element={<D_BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
