import { useEffect, useState } from "react";
import Create from "../components/Create";
import axios from "axios";
const Home = () => {
  const [alltask, setAlltask] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:3000/");
      console.log(response);
    };
    fetchdata();
  }, []);
  return (
    <>
      <h1 className="text-white text-3xl mb-6">Add New Task</h1>
      <Create />
    </>
  );
};

export default Home;
