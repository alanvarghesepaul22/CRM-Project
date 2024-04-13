import NavBar from "./components/common/NavBar";
import HeroPage from "./components/pages/hero/HeroPage";

function App() {
  return (
    <div className="w-full h-screen flex flex-col  bg-neutral-950 text-neutral-100">
      <NavBar />
      <HeroPage />
    </div>
  );
}

export default App;
