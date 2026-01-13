import useMediaQuery from "../hooks/useMediaQuery";

 function MediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h2>12.useMediaQuery</h2>
      <p>{isMobile ? "Mobile View" : "Desktop View"}</p>
    </div>
  );
}

export default MediaQueryDemo;