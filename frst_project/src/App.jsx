import Bodycontent from "./components/Bodycontent/Bodycontent"
import Footercontent from "./components/Footercontent/Footercontent"
import Headcontent from "./components/Headcontent/Headcontent"


function App() {
  function helo1(){
    console.log("Hellow 1");
  }
  
  
  return (
    <>
    <div>
      <Headcontent />
      <Bodycontent />
      <Footercontent />
    </div>
    <div>
      <button onClick={helo1}>Click 1</button>
      <button>Click 2</button>
      <button>Click 3</button>
      <button>Click 4</button>
    </div>
  
    
    </>
    )
      
}

export default App
