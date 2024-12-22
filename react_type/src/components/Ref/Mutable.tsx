import { useState, useRef, useEffect } from "react";

const MutableReference = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const StopTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => StopTimer(); // cleanup function to stop timer on unmount
  }, []);

  return (
    <div>
      <h1>Mutable Reference {timer}</h1>
      <button onClick={StopTimer}> Stop Timer</button>
    </div>
  );
};

export default MutableReference;
