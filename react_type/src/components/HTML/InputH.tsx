type InputProps = React.ComponentProps<"input">;

const InputH = (props: InputProps) => {
  return (
    <>
      <div>InputH</div>
      <input type="text" {...props} />
    </>
  );
};

export default InputH;
