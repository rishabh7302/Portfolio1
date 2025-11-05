// components/CountUpAnimated.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUpAnimated = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} aria-live="polite" aria-atomic="true">
      {inView ? (
        <CountUp start={0} end={end} duration={duration} suffix={suffix} prefix={prefix} />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
};

export default CountUpAnimated;
