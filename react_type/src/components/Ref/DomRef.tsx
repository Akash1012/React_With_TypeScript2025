import { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>DomRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
    </div>
  );
};

export default DomRef;
