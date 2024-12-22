type HeadingProps = {
  children: string; // or you can add ReactNode
};
const Heading = (props: HeadingProps) => {
  const { children } = props;
  return (
    <div>
      <h2>Heading</h2>
      <h2>{children}</h2>
    </div>
  );
};

export default Heading;
