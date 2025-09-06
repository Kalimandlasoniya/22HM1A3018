import React, { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import { Log } from "./logging-middleware/log"; // ✅ correct relative path

function App() {
  const [token, setToken] = useState("YOUR_BEARER_TOKEN"); // Replace with actual token

  useEffect(() => {
    Log("frontend", "info", "page", "App component loaded", token);
  }, [token]);

  return (
    <div>
      <UserCard name="Soniya" token={token} />
    </div>
  );
}

export default App;
