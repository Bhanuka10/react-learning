import { useState } from "react";
import Bodycontent from "./components/Bodycontent/Bodycontent";
import Footercontent from "./components/Footercontent/Footercontent";
import Headcontent from "./components/Headcontent/Headcontent";

function App() {
  const [a, setA] = useState(0); // ✅ using state

  function helo1() {
    console.log("Hello 1");
  }

  const btnclick = () => {
    console.log("Button clicked");
    setA(a + 1); // ✅ updating state
  };

  return (
    <>
      <div>
        <Headcontent />
        <Bodycontent />
        <Footercontent />
      </div>

      <div>
        <p>{a}</p> {/* ✅ now this will re-render when updated */}
        <button onClick={btnclick}>Click me</button>
      </div>

      <div>
        <button onClick={helo1}>Click 1</button>
        <button>Click 2</button>
        <button>Click 3</button>
        <button>Click 4</button>
      </div>
    </>
  );
}

export default App;
