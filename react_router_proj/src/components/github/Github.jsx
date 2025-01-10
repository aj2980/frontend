import React, { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data=useLoaderData()
//     const [data,setdata]=useState([])

//     useEffect(()=>{fetch('http://api.github.com/users/aj2980')
//     .then(response=> response.json())
//     .then(data =>{
//         setdata(data)
//     })
// },[]
// )
    return(
        <div
        className="text-center m-4 bg-orange-700 text-white p-4 text-3xl ">
            GitHub id:{data.login}
            <br />
            GitHub followers:{data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}
export default Github
 // alternative approach to fetch API it is a faster way 
 // here a hook named useloaderdata is used for extracting data from API
export const githubloader=async ()=>{
     const response=await fetch('http://api.github.com/users/aj2980')
     return response.json()
}