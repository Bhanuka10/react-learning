

function App() {
  const a =30;
  const getfulname = (a,b,c)=>{
    return `${a} ${b} ${c}`;
  }
  const arr=["apple","orange","grapes"];
  const yep=<ul>
    <li>java</li>
    <li>java script</li>
    <li>HTML</li>
    <li>Css</li>
  </ul>;
  return (
    <>
    <div className='cont'> 
      <h1>React App</h1>
      <p>{20/20}% for jsx</p>
      <p>const value is {a}</p>
      <p>{a>50 ? "greater" : "lesser"}</p>
      <p>full name is {getfulname("sahan","Bhanuka","Bandaranayake")}</p>
      <p>{arr[2]}</p>
      <p>{yep}</p>

    </div>
    </>
    )
      
}

export default App
