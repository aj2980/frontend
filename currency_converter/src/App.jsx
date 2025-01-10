import { useState } from 'react'
import './App.css'
import  InputBox  from './components/InputBox'
import Currencyinfo from './hooks/useCurrencyinfo'

function App() {
  
  const [amount,setamount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setto]=useState("inr")
  const [convamount,setconvamount]=useState(0)

  const currencyinfo=Currencyinfo(from)
  const options=Object.keys(currencyinfo)

  // making swap method
  const swap=()=>{
    setfrom(to)
    setto(from)
    setconvamount(amount)
    setamount(convamount)
  }

  const convert=()=>{

    setconvamount(amount*currencyinfo[to])
  }
  
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      backgroundSize: "cover", // Ensures the image covers the entire screen
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents tiling
      objectFit: "cover", // Ensures proper scaling
      height: "100vh", // Makes sure the height covers the viewport height
      width: "100vw",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setfrom(currency)} // Corrected this
                selectCurrency={from}
                onAmountChange={(value) => setamount(value)} // Fixed this
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to} // Fixed this
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
