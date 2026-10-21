import { useState } from "react";
import "./App.css";
import NextSteps from "./NextSteps";
import Center from "./Center";

export default function App() {
  const [count, setCount] = useState(0);
  const [showNextSteps, setShowNextSteps] = useState(true);
  console.log(showNextSteps);

  return (
    <>
      <Center
        showNextSteps={showNextSteps}
        setShowNextSteps={setShowNextSteps}
      />
      <div className="ticks"></div>
      {showNextSteps && <NextSteps count={count} setCount={setCount} />}

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}
