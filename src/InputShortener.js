import React, { useState } from "react";
import AnimatedHeading from "./utils/AnimatedHeading";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputContainer">
      <h1>
        <span
          style={{
            color: "white",
          }}
        >
          URL
        </span>{" "}
        <span>
          <AnimatedHeading text="SHORTENER" />
        </span>
        {/* collapse it with an animation */}
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
