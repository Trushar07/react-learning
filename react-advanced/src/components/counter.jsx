import React, { useState, useEffect, Fragment } from "react";

function Counter(props) {
  const [counter, setcounter] = useState(0);
  const [name, setname] = useState("");
  useEffect(() => {
    document.title = `${name} has clicked ${counter} times`;
  }, [counter, name]);
  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter your name"
      />
      <div>
        {name} has clicked {counter} times
      </div>
      <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
