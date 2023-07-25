import React, { useState, useRef } from "react";

const AnimatedHeading = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [intervalId, setIntervalId] = useState(null);
  const headingRef = useRef(null);

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      const headingElement = headingRef.current;
      const currentValue = headingElement.innerText;

      headingElement.innerText = currentValue
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  };

  return (
    <span ref={headingRef} onMouseOver={handleMouseOver}>
      {text}
    </span>
  );
};

export default AnimatedHeading;
