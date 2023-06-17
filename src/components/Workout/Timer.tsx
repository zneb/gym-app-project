import { useEffect, useMemo, useState } from "react";

export function Timer() {
  const startTime = useMemo(() => Date.now(), []);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(time + 1), 1000);

    return () => clearInterval(interval);
  });
  return <div>{time}</div>;
}
