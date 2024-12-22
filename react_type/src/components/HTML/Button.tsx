type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CustomButton = (props: ButtonProps) => {
  const { variant, children, ...rest } = props;
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
