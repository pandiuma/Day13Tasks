import { useState } from "react";
import useTimeout from "../hooks/useTimeOut";

 function TimeoutDemo() {
  const [show, setShow] = useState(false);

  useTimeout(() => setShow(true), 3000);

  return (
    <div>
      <h2>10.useTimeout</h2>
      {show ? <p>Hello after 3 seconds</p> : <p>Waiting...</p>}
    </div>
  );
}

export default TimeoutDemo;