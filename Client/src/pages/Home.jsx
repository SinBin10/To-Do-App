import { useEffect, useState } from "react";
import Create from "../components/Create";
import axios from "axios";
const Home = () => {
  const [alltask, setAlltask] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:3000/");
    setAlltask(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  async function handlecreate() {
    await fetchdata();
  }
  return (
    <>
      <h1 className="text-white text-3xl mb-6">Add New Task</h1>
      <Create onCreateTask={handlecreate} />
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
