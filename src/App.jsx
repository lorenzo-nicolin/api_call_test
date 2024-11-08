import { useState } from "react";
import "./App.css";
import Lyrics from "./component/Lyrics";

function App() {
  const [count, setCount] = useState(0);

  return <Lyrics />;
}

export default App;
