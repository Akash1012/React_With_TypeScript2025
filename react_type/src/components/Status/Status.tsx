type StatusProps = {
  status: "success" | "error" | "loading";
};

const Status = (props: StatusProps) => {
  let message;
  const { status } = props;

  if (status === "success") {
    message = "Successful";
  } else if (status === "error") {
    message = "Error";
  } else if (status === "loading") {
    message = "Loading...";
  }

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
