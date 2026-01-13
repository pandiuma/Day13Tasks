import { useState } from "react";
import useTitle from "../hooks/useTitle";

 function TitleDemo() {
  const [title, setTitle] = useState("Default Title");
  useTitle(title);

  return (
    <div>
      <h2>9.useTitle</h2>
      <button onClick={() => setTitle("New Page Title")}>
        Change Title
      </button>
    </div>
  );
}

export default TitleDemo;