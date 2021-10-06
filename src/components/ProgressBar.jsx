import React from "react";

function ProgressBar({ done }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1);

  return (
    <div
      className="h-3"
      id="progress"
      className="w-full my-auto bg-gray-200 rounded-md"
    >
      <div
        className={
          (done <= 20
            ? " bg-red"
            : done <= 40
            ? " bg-orange"
            : done <= 60
            ? "bg-yellow"
            : done <= 60
            ? " bg-lime"
            : "bg-green") + ` h-3 rounded-md progress-done`
        }
        style={style}
        id="progressDone"
      >
        {/* {done}% */}
        <p className="opacity-0">.</p>
      </div>
    </div>
  );
}

export default ProgressBar;
