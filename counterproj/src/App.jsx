import { useState } from 'react' // it is a hook which is use to show changes
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


{/* <script src="http://localhost:8097"></script> */}

// here react import kre bhi saree kam ho rahe hain bec of babel 
function App() {
  
  // let counter=15

  // using hooks 
  let [counter,setcounter]=useState(15) // useState two values return krta hai ARRAY ke form main, ek variable and dusra ek function


  // arrow function 
  const addValue=()=>{
    
    counter=counter+1
    setcounter(counter)
    console.log("value added:", counter)
  }

  const delValue= ()=>{
    counter=counter-1
    setcounter(counter)
    console.log("value substracted",counter)
  }
  return (
    <>
      <h1>aj and react</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}>add value : {counter}</button>
      <br />
      <button
      onClick={delValue}>substract value: {counter}</button>
    </>
  )
}

export default App
