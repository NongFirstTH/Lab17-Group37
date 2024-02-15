import "./App.css";
import EnterUsername from "./components/EnterUsername.tsx";
import ChatBox from "./components/ChatBox.tsx";
import { useAppSelector } from "./store/hooks.ts";
import { selectWebSocket } from "./store/Slices/webSocketSlice.ts";

function App() {
  const webSocketState = useAppSelector(selectWebSocket);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="max-w-full max-h-full">
          {webSocketState.isConnected ? <ChatBox /> : <EnterUsername />}
        </div>
      </div>
    </>
  );
}

export default App;
