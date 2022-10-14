import React, { useState } from 'react'
import Collapsible from 'react-collapsible'


const New_Message = (props) => {
  const mongoId = props.id
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND

    const url = `${HEROKU}`+ 'messages'

  return (
    <form action='https://body-bell-records.herokuapp.com/messages' method="post">
      <label  htmlFor="message">Message</label>
      <input className='p-3'
      type="text"
      name="message"
      />
      <input
      
      type="hidden"
      value={props.id}
      name="artist"
      />
      <button className='p-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'type="submit">Submit</button>
    </form>
  )
} 
export default New_Message

