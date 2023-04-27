import { useEffect, useState } from "react";

const Title = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intrvl = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Rendering");
    }, 1000);
    return () => {
      clearInterval(intrvl);
    };
  }, []);
  return (
    <div>
      <h1>Count {count}</h1>
    </div>
  );
};

const Toggle = () => {
  const style = { margin: "200px" };
  const [view, setView] = useState(true);
  const handleBtn = () => {
    console.log("btn clicked");
    setView(!view);
  };

  return (
    <div style={style}>
      {view && <Title />}
      <button onClick={handleBtn}>{view?'Stop':'Start'}</button>
    </div>
  );
};

export default Toggle;
