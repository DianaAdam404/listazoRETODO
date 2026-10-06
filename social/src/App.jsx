import "./App.css";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      fetchData();
    };
  });
  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
