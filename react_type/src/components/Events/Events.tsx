type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Events = (props: ButtonProps) => {
  const { handleClick, handleChange, value } = props;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleChange(event);
  };
  return (
    <div>
      <h1>Events</h1>
      <button onClick={(event) => handleClick(event, 100)}>Click Me</button>
      <input
        type="text"
        value={value}
        // onChange={(event) => handleChange(event)}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Events;
