import React from 'react'

// import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Person } from '../App'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

// const navigate = useNavigate();

const Formx: React.FC = () => {
  const { setData }: any = useContext(AppContext)
  const navik = useNavigate()
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().min(21).integer(),
    country: yup.string().required(),
    phone: yup.number().required(),
  })

  const { register, handleSubmit } = useForm<Person>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (d: any) => {
    console.log(d)
    setData(d)
    navik('/display')
  }





  const boxstyle = {
    backgroundColor: 'white', color: 'black',
    width: '100%'
  }
  return (

    <div className='formbox' style={boxstyle}>

      {/* Main App Body  Starts */}
      <header>
        <h1 className="title">
          JOBSTAX
        </h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='namebox'>
          <label >
            Full Name
          </label>
          <input placeholder="first Name" {...register("firstname")} />
          <input placeholder="last Name" {...register("lastname")} />
        </div>

        <div>
          <label >
            Contact details
          </label>
          <input placeholder='Email adress' {...register("email")} />
          <input placeholder='phone number' {...register("phone")} />
        </div>




        <div>
          <label >
            Age
          </label>
          <input placeholder='age' {...register("age")} />
        </div>

        <div>
          <label>
            Country
          </label>
          <input placeholder='Country' {...register("country")} />
        </div >

        <div className="butonz">
          <button type='submit'>
            Store Data
          </button>
          <button className='rsx'>
            Reset
          </button>
        </div>

      </form>


    </div >


  )
}
export default Formx