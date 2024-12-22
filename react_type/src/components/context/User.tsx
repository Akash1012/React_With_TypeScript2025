import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserMain = () => {
  const userContext = useContext(UserContext);
  //   const { user, setUser } = userContext;

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Akash",
        email: "akash@example.com",
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login </button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name} </div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};

export default UserMain;
