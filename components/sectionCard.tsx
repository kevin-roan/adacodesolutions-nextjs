import Colors from "@/contants/colors";
import React from "react";
import { useState, useEffect, useRef } from "react";

const SectionCard = () => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing after it's in view
        }
      },
      {
        threshold: 0.1, // Adjust this to determine when the card is considered in view
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={cardRef}
      className="p-10 lg:m-4 rounded-2xl lg:flex md:flex  flex-wrap sm:flex-wrap gap-3 text-center justify-between 
bg-gradient-to-t from-cyan-900 to-cyan-600
      "
      style={{
        // backgroundColor: Colors.primary,
        color: "white",
      }}
    >
      <div className="w-50">
        <h2 className="font-extrabold text-4xl">
          <Counter endValue={110} duration={2000} suffix="+" trigger={inView} />
        </h2>
        <p>Students successfully completed course got </p>
      </div>
      <div className="w-50">
        <h2 className="font-extrabold text-4xl">
          <Counter endValue={18} duration={2000} suffix="+" trigger={inView} />
        </h2>
        <p>Instructores are here to help you get a job into IT Sector</p>
      </div>
      <div className="w-50">
        <h2 className="font-extrabold text-4xl">
          <Counter
            endValue={99.99}
            duration={2000}
            suffix="%"
            trigger={inView}
          />
        </h2>
        <p>Automate the learning process with us and get into IT</p>
      </div>
    </div>
  );
};

export default SectionCard;

const Counter = ({
  startValue = 0,
  endValue,
  duration,
  suffix = "",
  trigger,
}) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    if (!trigger) return;

    const incrementTime = Math.floor(duration / (endValue - startValue));

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextValue = prevCount + 1;
        if (nextValue >= endValue) {
          clearInterval(timer);
          return endValue;
        }
        return nextValue;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startValue, endValue, duration, trigger]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
