import Phones from "./components/Phones";
import UpButton from "./components/UpButton";
import { PhoneProvider } from "./context/PhoneContext";

function App() {
  return (
    <div>
      <PhoneProvider>
        <Phones></Phones>
      </PhoneProvider>
      <UpButton></UpButton>
    </div>
  );
}

export default App;
