import useClipboard from "../hooks/useClipboard";

 function ClipboardDemo() {
  const { copy } = useClipboard();

  return (
    <div>
      <h2>11.useClipboard</h2>
      <button onClick={() => copy("Copied text!")}>
        Copy Text
      </button>
    </div>
  );
}

export default ClipboardDemo;