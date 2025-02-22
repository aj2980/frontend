import { useState, useCallback, useEffect,useRef } from 'react'

import './App.css'
function App() {
  const [length, setlength] = useState(8)
  const [includenumber,setnumber]=useState(false)
  const [includechar,setchar]=useState(false)
  const [password,setpassword]=useState("")

  // using ref hook
  const passwordref=useRef(null)


  // useCallback takes two argument first is a function second is dependencies in the form of array
  const passwordgenerator=useCallback( ()=>{

    let pass="" // where password is generated
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  // it's the main string string from where random strings are generated
    if(includechar){
      str+="!@#$%^&*()_+-=[]{}|;:'\",.<>?/~`"
    }
    if(includenumber){
      str+="0123567894"
    }
    for (let index = 1; index <=length; index++) {
      let char=Math.floor(Math.random()*str.length+1) // generating random number -- we will get char 
      pass+=str.charAt(char)
    }
    setpassword(pass)

  },[length,includenumber,includechar,setpassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,includechar,includenumber,passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={includenumber}
          id="numberInput"
          onChange={() => {
              setnumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={includechar}
              id="characterInput"
              onChange={() => {
                  setchar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
