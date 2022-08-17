import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userMeAPI, logoutUser } from "../services/api";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      const resp = await userMeAPI();
      console.log("resp", resp);
      setUser(resp.data.response);
    } catch (error) {
      const { response } = error;
      console.error(response);
    }
  };

  const handleLogout = () => {
    const result = window.confirm("Are you sure to logout?");
    if (result) {
      logoutUser(navigate);
    }
  };

  return (
    <React.Fragment>
      <div className="container text-center">
        <h1>
          Hi, <br />
          {user && <span>{user?.name}</span>}
        </h1>
        <button
          className="btn btn-danger ml-auto"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
