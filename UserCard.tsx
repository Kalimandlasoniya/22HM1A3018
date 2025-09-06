import React, { useEffect } from "react";
import { Log } from "../logging-middleware/log"; // ✅ FIXED

interface UserCardProps {
  name: string;
  token: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, token }) => {
  useEffect(() => {
    Log("frontend", "info", "component", `UserCard loaded for ${name}`, token);
  }, [name, token]);

  return <div>Hello, {name}!</div>;
};
