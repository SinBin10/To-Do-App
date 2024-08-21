import { useEffect, useState } from "react";
import Create from "../components/Create";
import axios from "axios";
const Home = () => {
  const [alltask, setAlltask] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:3000/");
      console.log(response.data);
      setAlltask(response.data);
    };
    fetchdata();
  }, []);
  return (
    <>
      <h1 className="text-white text-3xl mb-6">Add New Task</h1>
      <Create />
      {alltask.length === 0 ? (
        <div className="text-white">No tasks</div>
      ) : (
        alltask.map((task) => (
          <div key={task._id} className="text-white">
            {task.task}
          </div>
        ))
      )}
    </>
  );
};

export default Home;
