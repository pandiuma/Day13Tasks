import { useRef, useState, useEffect } from "react";

function useHover() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    node.addEventListener("mouseenter", onEnter);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mouseenter", onEnter);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return [isHovered, ref];
}

export default useHover;