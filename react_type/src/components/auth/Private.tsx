import Login from "./Login";
import { profileProps } from "./Profile";

export type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<profileProps>;
};

const Private = (props: PrivateProps) => {
  const { isLoggedIn, Component } = props;

  if (isLoggedIn) {
    return <Component name="Akash" />;
  } else {
    return <Login />;
  }
};

export default Private;
