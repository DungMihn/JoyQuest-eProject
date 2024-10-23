import { Outlet } from "react-router-dom";
import Header from "../compoment/Header";
import Footer from "../compoment/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
