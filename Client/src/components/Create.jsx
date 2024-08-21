import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const handleClick = async () => {
    await axios.post("http://localhost:3000/create", {
      task,
    });
    setTask("");
  };
  return (
    <div className="border-2 border-white">
      <input
        className="bg-slate-700 p-2 text-2xl outline-blue-600 text-white"
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleClick} className="text-white text-4xl px-4">
        +
      </button>
    </div>
  );
};

export default Create;
