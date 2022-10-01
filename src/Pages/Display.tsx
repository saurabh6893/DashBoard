import React, { useContext } from 'react'
import { AppContext } from '../App'

const Display = () => {
  const { data }: any = useContext(AppContext)
  return (
    <div>
      <h1>{data.firstname}</h1>
      <h1>{data.lastname}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phone}</h1>
      <h1>{data.age}</h1>
      <h1>{data.country}</h1>
    </div>
  )
}

export default Display