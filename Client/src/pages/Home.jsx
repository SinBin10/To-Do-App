import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [task, setTask] = useState("");
  const handleClick = async () => {
    await axios.post("mongodb:127.0.0.1.27017/merndb", {
      task: task,
    });
    console.log("data posted...");
  };
  return (
    <>
      <h1 className="text-white text-3xl mb-6">Add New Task</h1>
      <div className="border-2 border-white">
        <input
          className="bg-slate-700 p-2 text-2xl outline-blue-600 text-white"
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button onClick={handleClick} className="text-white text-4xl px-4">
          +
        </button>
      </div>
    </>
  );
};

export default Home;
