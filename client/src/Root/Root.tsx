import { Outlet } from "react-router-dom";
import { Available, Footer, Navbar } from "../components";
function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Available />
      <Footer />
    </>
  );
}

export default Root;
