import useOnlineStatus from "../hooks/useOnlineStatus";

 function OnlineStatusDemo() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>13.useOnlineStatus</h2>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default OnlineStatusDemo;