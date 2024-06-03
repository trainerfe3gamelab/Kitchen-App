import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [kntl, setKntl] = useState("");

  useEffect(() => {
    axios.get("/user/a").then(({ data }) => {
      console.log(data);
      setKntl(data);
    });
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      {!!user && <h2>Hi {user.name}! </h2>}
    </div>
  );
}
