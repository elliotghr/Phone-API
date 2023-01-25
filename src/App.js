import Phones from "./components/Phones";
import { PhoneProvider } from "./context/PhoneContext";

function App() {
  return (
    <div>
      <PhoneProvider>
        <Phones></Phones>
      </PhoneProvider>
    </div>
  );
}

export default App;
