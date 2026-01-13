import useHover from "../hooks/useHover";

 function HoverDemo() {
  const [isHovered, ref] = useHover();

  return (
    <div>
      <h2>8.useHover</h2>
      <div
        ref={ref}
        style={{
          padding: "20px",
          background: isHovered ? "lightgreen" : "lightgray",
        }}
      >
        {isHovered ? "Hovered" : "Hover Me"}
      </div>
    </div>
  );
}

export default HoverDemo;