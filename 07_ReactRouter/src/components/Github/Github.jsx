import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';

function Github() {
    const[data,setData]=useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(data => {console.log(data);
        setData(data);
    })
    }, []);
  return (
    <div className = "text-center bg-gray-900 rounded-xl p-4 text-white">Github Followers {data.followers} </div>
  )
}

export default Github