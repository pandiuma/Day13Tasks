import { useState } from "react";
import useDebounce from "../hooks/UseDebounce";

function DebounceDemo() {
  const [text, setText] = useState("");
  const debouncedValue = useDebounce(text, 500);

  return (
    <div>
      <h2>6.useDebounce</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <p>Debounced: {debouncedValue}</p>
    </div>
  );
}
export default DebounceDemo;