import { ReactNode } from "react";

interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}
interface WarningBoxProps {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  const modeClass =
    mode === "hint"
      ? "infobox-hint"
      : `infobox-warning warning--${(props as WarningBoxProps).severity}`;

  return (
    <aside className={`infobox ${modeClass}`}>
      {mode !== "hint" && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
