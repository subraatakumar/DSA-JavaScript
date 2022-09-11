```js
import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [isReStart, setIsReStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [minInput, setMinInput] = useState(0);
  const [secInput, setSecInput] = useState(0);
  const timerLoop = useRef();

  if (sec >= 60) {
    setSec(0);
    setMin((prev) => prev + 1);
  }

  useEffect(() => {
    console.log(isStart, isPause, isReStart, isStop);
    if ((!isStart && isPause) || (!isStart && !isReStart)) {
      timerLoop.current = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    } else if ((isStart && !isStop) || (!isStart && !isPause)) {
      clearInterval(timerLoop.current);
    }
  }, [isStart, isPause, isReStart, isStop]);

  const handleStart = () => {
    setMin(parseInt(minInput));
    setSec(parseInt(secInput));
    setIsStart(!isStart);
    setIsPause(!isPause);
    setIsStop(!isStop);
    setMinInput(0);
    setSecInput(0);
  };

  const handlePause = () => {
    if (!isPause) {
      setIsPause(true);
      setIsReStart(false);
    } else {
      setIsPause(false);
      setIsReStart(true);
    }
  };

  const handleStop = () => {
    setIsStart(!isStart);
    setIsPause(!isPause);
    setIsStop(!isStop);
  };

  return (
    <div className="App">
      <h1>React Stop Watch</h1>
      <input
        type="number"
        value={minInput}
        onChange={(e) => setMinInput(e.target.value)}
      />
      <input
        type="number"
        value={secInput}
        onChange={(e) => setSecInput(e.target.value)}
      />
      <button type="button" disabled={!isStart} onClick={handleStart}>
        Start
      </button>
      <button type="button" disabled={isStart} onClick={handlePause}>
        {isReStart ? "Restart" : "Pause"}
      </button>
      <button type="button" disabled={!isStop} onClick={handleStop}>
        Stop
      </button>
      <p>
        {returnWithZero(min)}:{returnWithZero(sec)}
      </p>
    </div>
  );
}

function returnWithZero(num) {
  return num < 10 ? "0" + num : num;
}

```

[Code Sandbox Link](https://codesandbox.io/s/react-stop-watch-qgu21i?file=/src/App.js:0-2281)
