import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Connecting to backend...");

  useEffect(() => {
  fetch("https://mern-cloud-backend.onrender.com/api/status")
    .then((response) => response.json())
    .then((data) => {
      setStatus(data.message);
    })
    .catch(() => {
      setStatus("Backend connection failed");
    });
}, []);
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