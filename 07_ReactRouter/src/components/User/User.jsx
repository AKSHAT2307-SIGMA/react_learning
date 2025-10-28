import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const { userId } = useParams();

return (
    <div className = "text-center bg-gray-700 rounded-3xl text-green-600 p-4">User: {userId}</div>
  )
}

export default User  