export type profileProps = {
  name: string;
};

const Profile = ({ name }: profileProps) => {
  return (
    <div>
      <h1>Please {name} to continue</h1>
    </div>
  );
};

export default Profile;
