import React from 'react'

export default function Contact() {
  return (
    <form className='w-75 mx-auto d-flex justify-content-between align-items-center'>
      <div className="fSide ">
        <label htmlFor="name" className='text-white'>Name: </label>
        <input type="text" className='form-control w-100' id='name' />
        <label htmlFor="email" className='text-white'>Email: </label>
        <input type="email" className='form-control w-100' id='email' />
        <label htmlFor="phone" className='text-white'>Phone: </label>
        <input type="tel" className='form-control w-100' id='phone' />
      </div>
      <div className="fSide ">
        <label htmlFor="name" className='text-white'>Password: </label>
        <input type="text" className='form-control w-100' id='name' />
        <label htmlFor="email" className='text-white'>rePassword: </label>
        <input type="email" className='form-control w-100' id='email' />
        <label htmlFor="phone" className='text-white'>Age: </label>
        <input type="tel" className='form-control w-100 ' id='phone' />
      </div>
      <button className='btn btn-danger btt px-4'>Send</button>
    </form>
  )
}
