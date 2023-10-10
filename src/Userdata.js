import React, { useState, useEffect } from "react";
import Axios from "axios";

function Userdata() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Make an API request to fetch user data
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users); // Assuming the API response is an array of user objects
      });
  }, []);

  const userdetails = () => {
    if (!Array.isArray(users) || users.length === 0) {
      return <p>Loading...</p>; // Display loading indicator
    }

    return (
      <table className="border border-collapse">
        <thead>
          <tr className="border">
            <th>SNo</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((val, index) => (
            <tr key={val.id} className="border">
              <td>{index + 1}</td>
              <td>
                <img
                  src={val.image}
                  alt={`${val.firstName} ${val.lastName}`}
                  width="50"
                  height="50"
                />
              </td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
              <td>{val.domain}</td>
              <td>{val.ip}</td>
              <td>{val.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2 className="text-center">Dummy data</h2>
      {userdetails()}
    </div>
  );
}

export default Userdata;
