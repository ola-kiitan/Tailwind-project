import React from 'react'

export default function Contact() {
  return (
    <div
      className=' bg-amber-100 contact items-center h-full p-2 mt-2 shadow-md'
      id='contact'
    >
      <div className='contact items-center bg-gray-100 shadow'>
        <h1 className='text-2xl my-2 '>Contact-Us</h1>
        <form action='' className='contact p-6 '>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className=' bg-slate-200 outline-none mb-2 '
          />
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            className=' bg-slate-200 outline-none mb-2'
          />
          <label htmlFor='message'>Message</label>
          <textarea
            className=' bg-slate-200  outline-none '
            id='message'
            name='message'
            rows='4'
            cols='50'
            placeholder='message'
          ></textarea>
          <button className=' bg-slate-500 text-white py-4 hover:bg-slate-400 hover:text-black'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
