import React, { useContext } from 'react'
import { AppContext } from '../App'

const Display = () => {
  const { data }: any = useContext(AppContext)

  return (
    <>
      {data ? <div className='card'>
        <h1 className='cName'>Full Name: {data.firstname} {data.lastname}</h1>
        <div className="contacx">
          <h1 className='cEmail'>Email at {data.email}</h1>
          <h1 className='cNum'>Phone Number {data.phone}</h1>
        </div>
        <h1 className='cAge'>Age :{data.age}</h1>
        <h1 className='cCountry'>Country: {data.country}</h1>
      </div> : <div className='card'>
        <h1>Data not available</h1></div>}
    </>
  )

}

export default Display