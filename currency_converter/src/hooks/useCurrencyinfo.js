import { useEffect,useState } from "react";

function usecurrencyinfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
)
.then((res)=>res.json())
.then((res)=>setdata(res[currency]))
// above code is used to fetch data from currency API data is in the form of string so we need to convert it into JSON format
    },[currency])
    return data
}

export default usecurrencyinfo
