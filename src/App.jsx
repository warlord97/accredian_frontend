import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Hero />
        <Process />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
