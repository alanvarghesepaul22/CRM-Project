import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="h-screen w-full bg-neutral-100 text-neutral-950">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default App;
