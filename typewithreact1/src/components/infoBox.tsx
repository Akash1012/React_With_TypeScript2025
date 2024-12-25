import { ReactNode } from "react";

interface InfoBoxProps {
  mode: "hint" | "warning";
  children: ReactNode;
}

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props;

  const modeClass =
    mode === "hint" ? "infobox-hint" : `infobox-warning warning--${"high"}`;

  return (
    <aside className={`infobox ${modeClass}`}>
      {mode !== "hint" && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
