import React,{useContext} from "react";
// import { userContext } from "./Home";

function Progress(props) {
  // const total = useContext(userContext)
  // const current = useContext(userContext)
  return (
    <div>
      <h2>
        Question {props.current} / {props.total}
      </h2>
    </div>
  );
}

export default Progress;
