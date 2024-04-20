import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col  bg-neutral-950 text-neutral-100">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
