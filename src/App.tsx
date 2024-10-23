import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./compoment/About";
import Layout from "./layouts";
import Pc from "./compoment/About/link/Pc";
import Twt from "./compoment/About/link/Twt";
import Ct from "./compoment/About/link/Ct";
import Error from "./compoment/Error";
import Faqs from "./compoment/Faqs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<h2 className="mt-20">Home</h2>} />
          <Route path="/about" element={<About />} />
          <Route path="/about/privatecottages" element={<Pc />} />
          <Route path="/about/tentswtithteritory" element={<Twt />} />
          <Route path="/about/conpacttrailers" element={<Ct />} />
          <Route path="/faqs" element={<Faqs />}/>
          {/* Add more routes here */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
