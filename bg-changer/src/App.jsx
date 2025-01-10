import { useState } from "react"

function App() {
  const [color,setcolor]=useState("white")

  return (
      // creating layout of screen
      <div
      className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <h1>hello this is a project for changing background color 08/01/2025</h1>
        {/* creating the strip */}

        <div
        className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
          // creating box inside strip
          className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            {/* creating button */}
            <button
            // onclick ko ek function chahiye rehta hai , isliye callback function ke andar setcolor function ko call kara hai
            // agar direct setcolor call krdete onclick main to argument pass nahi kr paate fir ....
            onClick={()=>setcolor("red")}
            className="outline-none px-4"
            style={{backgroundColor:"red"}}>red</button>

            <button
            onClick={()=>setcolor("yellow")}
            className="outline-none px-4"
            style={{backgroundColor:"yellow"}}>yellow</button>

            <button
            onClick={()=>setcolor("green")}
            className="outline-none px-4"
            style={{backgroundColor:"green"}}>green</button>

          </div>

        </div>

      </div>
    
  )
}

export default App
