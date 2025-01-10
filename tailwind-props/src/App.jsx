import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  

  let myobj={
    name:"aj",
    age:"20",
    year:"2025"
  }

  return (
    <>
      <h1
      className='bg-green-200 text-black p-7 rounded-2xl'>working on tailwind</h1>
      <br />
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/> 
  {/* // here image tag should be closed otherwise error */}
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
<br />
{/* i need two different names in two card how to do this here props are used to do this */}
{/* we can pass objects , arrays in this card directly */}
<Card  object={myobj}/>
<br />
<Card name="amaara" btntext="click me"/>
<br />
<Card name="raju" />
    </>
  )
}

export default App
