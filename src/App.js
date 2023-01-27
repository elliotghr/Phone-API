import Phones from "./components/Phones";
import UpButton from "./components/UpButton";
import { PhoneProvider } from "./context/PhoneContext";

function App() {
  return (
    <div>
      <header>
        <nav>
          <h1>Phones API</h1>
        </nav>
      </header>
      <PhoneProvider>
        <Phones></Phones>
      </PhoneProvider>
      <UpButton></UpButton>
    </div>
  );
}

export default App;
