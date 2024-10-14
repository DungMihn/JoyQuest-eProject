import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
