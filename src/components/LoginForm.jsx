import { useState } from "react";

const LoginForm = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/authenticate", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } else {
      const { error } = await response.json();
      alert(error);
    }
  };

  return (
    <form className="flex flex-col font-mono text-2xl mt-16" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="Username">Username</label>
        <input
          className="mb-6 mt-4 group rounded-lg border border-gray-300 bg-black dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4"
          type="text"
          id="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Password">Password</label>
        <input
          className="mb-6 mt-4 group rounded-lg border border-gray-300 bg-black dark:border-neutral-700 dark:bg-neutral-800/30 px-5 py-4"
          type="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button className="mt-8 rounded-lg border border-white py-4 transition-all hover:scale-105" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
