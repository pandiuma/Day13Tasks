import useInput from "../hooks/useInput";

 function InputDemo() {
  const { value, onChange } = useInput("");

  return (
    <div>
      <h2>5.useInput</h2>
      <input value={value} onChange={onChange} />
      <p>Value: {value}</p>
    </div>
  );
}

export default InputDemo;