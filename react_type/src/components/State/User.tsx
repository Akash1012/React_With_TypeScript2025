import { useEffect, useState } from "react";

type AuthUser = {
  name?: string;
  email?: string;
  roll?: number;
  abc?: {
    name: string;
  };
};

const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    // setUser({
    //   name: "Akash",
    //   email: "akash@example.com",
    //   roll: 100,
    // });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login </button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
      <div>User roll is {user?.roll}</div>
    </div>
  );
};

export default User;
