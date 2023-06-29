import "./App.css";
import { useEffect } from "react";
import { YourWeather } from "../YourWeather/Your-weather";
import { fetchPlace } from "../fetch";
function App() {
  let Arr = [];
  useEffect(() => {
    Arr = fetchPlace();
  }, []);
  return (
    <div className="App">
      <p>buongiorno</p>
      {<p>caricando....</p> || <YourWeather Arr={Arr} />}
    </div>
  );
}

export default App;
