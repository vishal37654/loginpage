

import React, { useEffect, useState } from "react";
import Pagination from "./helper/Pagination";

const Fetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.log("error");
        setError(error);
      } finally {
        setLoading(false);
      }

    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  
  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((userData) => (
          <li key={userData.id}>
            <h3>{userData.email}</h3>
            <h3>{userData.first_name}</h3>
            <h3>{userData.last_name}</h3>
            <img src={userData.avatar} alt={userData.first_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

