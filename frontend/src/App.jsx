import { useState } from "react";
import NavBar from "./components/common/NavBar";
import HeroPage from "./components/pages/hero/HeroPage";
import axios from "axios";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);

  // function componentDidMount() {
  //   let data;

  //   axios
  //     .get("http://localhost:8000/wel/")
  //     .then((res) => {
  //       data = res.data;
  //       setData(data);
  //     })
  //     .catch((err) => {});
  // }
  return (
    <div className="w-full h-screen flex flex-col  bg-neutral-950 text-neutral-100">
      <NavBar />
      {/* <HeroPage /> */}
      <Form />
    </div>
  );
}

export default App;
