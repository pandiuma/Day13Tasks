import ClipboardDemo from "./components/ClipboardDemo";
import CounterDemo from "./components/CounterDemo";
import DebounceDemo from "./components/DebounceDemo";
import FetchDemo from "./components/FetchDemo";
import GeolocationDemo from "./components/GeolocationDemo";
import HoverDemo from "./components/HoverDemo";
import InputDemo from "./components/InputDemo";
import LocalStorageDemo from "./components/LocalStorageDemo";
import MediaQueryDemo from "./components/MediaQueryDemo";
import OnlineStatusDemo from "./components/OnlineStatusDemo";
import PreviousDemo from "./components/PreviousDemo";
import ThemeDemo from "./components/ThemeDemo";
import TimeoutDemo from "./components/TimeoutDemo";
import TitleDemo from "./components/TitleDemo";
import ToggleDemo from "./components/ToggleDemo";

function App() {
  return (
    <div>
      <h2>Custom Hooks Demo App</h2>
      <CounterDemo />
      <ToggleDemo />
      <LocalStorageDemo />
      <FetchDemo />
      <InputDemo />
      <DebounceDemo />
      <PreviousDemo />
      <HoverDemo />
      <TitleDemo />
      <TimeoutDemo />
      <ClipboardDemo />
      <MediaQueryDemo />
      <OnlineStatusDemo />
      <GeolocationDemo />
      <ThemeDemo />
    </div>
  );
}

export default App;