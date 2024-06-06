import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Accordion from "../components/layouts/Accordion.jsx";

export default function Dashboard() {
  return (
    <div className="my-24 h-svh w-full">
      <Accordion />
    </div>
  );
}
