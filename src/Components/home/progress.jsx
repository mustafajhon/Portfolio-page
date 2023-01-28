import React, { useState } from "react";
import "./home.css";
const ProgressBar = (props) => {
  //   const [progress, setProgress] = useState(60);
  const progress = 100;
  //   const incrementProgress = () => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         return 100;
  //       }
  //       return prevProgress + 10;
  //     });
  //   };

  return (
    <>
      <span className="fw-bolder">{props.title}</span>
      <div
        className="progress"
        style={{
          width: `${props.Progress}%`,
          height: "20px",
          background: "green",
        }}
      >
        <h6 className="text text-center">{props.Progress}%</h6>
      </div>
    </>
    //   {/* <button onClick={incrementProgress}>Increment Progress</button> */}
  );
};

export default ProgressBar;
