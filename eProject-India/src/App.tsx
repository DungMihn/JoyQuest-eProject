import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<TestPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
