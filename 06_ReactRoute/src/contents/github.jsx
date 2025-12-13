import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data= useLoaderData()
    // const [data,setData] =useState([])
    // useEffect(function(){
    //     fetch('https://api.github.com/users/mohit46200')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github following: {data.following}
    <img src={data.avatar_url} alt="Git PIcture" width={300}/>
    </div>
  )
}

export default Github


export const githubInfiloader =async () => {
    const response = await fetch('https://api.github.com/users/mohit46200')
    return response.json()
}


