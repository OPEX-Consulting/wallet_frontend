import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Transaction from "./components/players/govt/Transaction";

import Dashboard from "./components/pages/Dashboard";

import Localgovt from "./components/players/govt/Localgovt";
import SelectLocalgovt from "./components/players/govt/SelectLocalgovt";
import AgentManager from "./components/players/govt/AgentManager";
import Agent from "./components/players/govt/Agent";
import Wallethome from "./components/walletlanding/Wallethome";
import Signin from "./components/walletlanding/Signin";
import Opexlocalgovt from "./components/players/opex/Opexlocalgovt";
import Opexagent from "./components/players/opex/Opexagent";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const [role, setRole] = useState("");
  return (
    <div className="app">
      <Router>
        <Routes>
          {/* OPEX  ROUTE*/}
          <Route path="/opexlocalgovt" element={<Opexlocalgovt />} />
          <Route path="/opexagent" element={<Opexagent />} />
          {/* OPEX ROUTE ENDS */}
          <Route
            path="/signin"
            element={<Signin setRole={setRole} role={role} />}
          />
          <Route path="/agent" element={<Agent />} />
          <Route path="/manageagents" element={<AgentManager />} />
          <Route path="/selectlocalgovt" element={<SelectLocalgovt />} />
          <Route path="/localgovt" element={<Localgovt />} />
          <Route path="/dashboard" element={<Dashboard role={role} />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route exact path="/" element={<Wallethome />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
