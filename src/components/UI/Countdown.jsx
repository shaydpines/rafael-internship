import { useEffect, useState } from "react";

export default function Countdown({ expiration }) {
  const [countdown, setCountdown] = useState();

  const calcCountdown = () => {
    const remainingTime = expiration - Date.now();
    setCountdown(remainingTime > 0 ? remainingTime : 0);
  };

  useEffect(() => {
    if (!expiration) return;
    calcCountdown(expiration);
    const intervalId = setInterval(() => {
      calcCountdown(expiration);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatCountdown = (ms) => {
    if (ms === null) return "";

    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      className="de_countdown"
    >
      {formatCountdown(countdown)}
    </div>
  );
}
