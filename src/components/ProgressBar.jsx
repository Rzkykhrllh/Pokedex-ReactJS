import React from "react";

function ProgressBar({ done }) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      //   transition: "1s ease 0.3s;",
      //   background: "linear-gradient(to left, #F2709C, #FF9472)",
    };

    setStyle(newStyle);
  }, 100);

  return (
    <div className="bg-blue-200 " id="progress">
      <div className="h-3 progress-done" style={style} id="progressDone">
        {/* {done}% */}
        <p className="opacity-0">.</p>
      </div>
    </div>
  );
}

export default ProgressBar;
