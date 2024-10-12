import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MainLayout() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
