import "./App.css";

import { fetchPlace } from "../fetch";
function App() {
  const handleClick = () => fetchPlace();
  return (
    <div className="App">
      <p>buongiorno</p>
      <button className="cerca" onClick={handleClick}>
        luogo
      </button>
    </div>
  );
}

export default App;
