import React from "react";

function Question(props) {
  return (
    <div className="container-question">
      <p>{props.question}</p>
    </div>
  );
}

export default Question;
