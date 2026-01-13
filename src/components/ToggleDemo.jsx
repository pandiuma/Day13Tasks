import useToggle from "../hooks/useToggle";

 function ToggleDemo() {
  const [isOpen, toggle] = useToggle();

  return (
    <div>
      <h2>2.useToggle</h2>
      <p>{isOpen ? "Open" : "Closed"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default ToggleDemo;