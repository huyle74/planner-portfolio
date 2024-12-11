"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import LoginForm from "./loginPage-component/form";

export default function LoginPage() {
  const [username, setUsername] = useState<string>(""),
    [password, setPassword] = useState<string>(""),
    router = useRouter();

  const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) return;

    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push(data.redirect);
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      <LoginForm
        username={username}
        password={password}
        onSubmit={HandleLogin}
        onChangeName={(e) => setUsername(e.target.value)}
        onChangePass={(e) => setPassword(e.target.value)}
      />
    </Box>
  );
}
