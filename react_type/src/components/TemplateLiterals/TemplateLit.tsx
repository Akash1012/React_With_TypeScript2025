type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const TemplateLit = ({ position }: ToastProps) => {
  return <div>TemplateLit {position}</div>;
};

export default TemplateLit;
