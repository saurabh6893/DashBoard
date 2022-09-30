import React from 'react'

// import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'



// const navigate = useNavigate();

const Formx: React.FC = () => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().min(21).integer(),
    country: yup.string().required(),
    gender: yup.string().required(),
    phone: yup.number().required(),
    employed: yup.string().required(),
  })

  const onSubmit: SubmitHandler<Person> = (data: any) => {
    console.log(data)
    // navigate('/Display');
  }
  const { register, handleSubmit } = useForm<Person>({
    resolver: yupResolver(schema),
  })
  enum country {
    India = 'India',
    Usa = 'Usa',
    Unitedkingdom = 'Unitedkingdom',
    Russia = 'Russia',
    China = 'China',
    Egypt = 'Egypt',
    Italy = 'Italy',
    Denmark = 'Denmark',
    Sweden = 'Sweden',
  }

  enum gender {
    male = 'male',
    female = 'female',
    other = 'other'
  }


  interface Person {
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    gender: gender;
    country: country;
    phone: number;
    employed: boolean;
  }

  return (

    <div style={{ backgroundColor: 'white', color: 'black' }}>

      {/* Main App Body  Starts */}
      <header>
        <h1 className="title" style={{ color: 'black', fontSize: '50px' }}>
          JOBSTAX
        </h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >
            First Name
          </label>
          <input {...register('firstname')} />
        </div>

        <div>
          <label>
            Last Name
          </label>
          <input {...register('lastname')} />
        </div>

        <div>
          <label >
            Email Address
          </label>
          <input {...register('email')}></input>
        </div>


        <div>
          <label >
            Phone Number
          </label>
          <input {...register('phone')}></input>
        </div >


        <div>
          <label >
            Age
          </label>
          <input {...register('age')} />
        </div>

        <div>
          <label >
            Country
          </label>
          <input {...register('country')} />
        </div >


        <div>
          <label>gender</label>
          <label>Male</label>
          <label>Female</label>
          <label>other</label>
        </div>


        <div>
          <label>Employed</label>
        </div>
        <div>
          <label>UnEmployed</label>
        </div>

        <button>
          Store Data
        </button>
        <button>
          Reset
        </button>




      </form>
    </div >


  )
}
export default Formx