import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Connecting to backend...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/status")
      .then((response) => {
        setStatus(response.data.message);
      })
      .catch(() => {
        setStatus("Backend connection failed");
      });
  }, []);

  return (
    <div className="container">
      <h1>MERN Cloud Deployment</h1>

      <h2>Student Web Application</h2>

      <div className="card">
        <p><strong>Frontend:</strong> React.js</p>
        <p><strong>Backend:</strong> Node.js + Express.js</p>
        <p><strong>Database:</strong> MongoDB Atlas</p>
        <p><strong>Status:</strong> {status}</p>
      </div>

      <p>Application successfully running.</p>
    </div>
  );
}

export default App;