import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [quote, setQuote] = useState("");
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/wel/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  const renderSwitch = (param) => {
    switch (param + 1) {
      case 1:
        return "primary ";
      case 2:
        return "secondary";
      case 3:
        return "success";
      case 4:
        return "danger";
      case 5:
        return "warning";
      case 6:
        return "info";
      default:
        return "yellow";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/wel/", {
        name: user,
        detail: quote,
      })
      .then((res) => {
        setUser("");
        setQuote("");
      })
      .catch((err) => {});
  };

  return (
    <div className="h-screen w-3/5 mx-auto p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <span className="block text-neutral-700">Author</span>
          </div>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-black"
            placeholder="Name of the Poet/Author"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="mb-3">
            <span className="block text-neutral-700">Your Quote</span>
          </div>
          <textarea
            className="w-full px-3 py-2 border rounded-md text-black"
            placeholder="Tell us what you think of ....."
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>

      <hr className="hr" />

      {data.map((item, id) => (
        <div key={id}>
          <div className="shadow shadow-lg bg-red-800">
            <div className="font-bold">Quote {id + 1}</div>
            <div className="p-3">
              <blockquote>
                <h1>{item.detail}</h1>
                <footer>
                  <cite title="Source Title">{item.name}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <span className="block h-1"></span>
        </div>
      ))}
    </div>
  );
};

export default Form;
