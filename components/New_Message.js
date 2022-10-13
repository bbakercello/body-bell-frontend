import React, { useState } from 'react'
import Collapsible from 'react-collapsible'


const New_Message = (props) => {
  const mongoId = props.id
  const HEROKU = process.env.NEXT_PUBLIC_BACKEND

    const url = `${HEROKU}`+ 'messages'

  return (
    <form action='https://body-bell-records.herokuapp.com/messages' method="post">
      <label for="message">Message</label>
      <input
      type="text"
      name="message"
      />
      <input
      type="hidden"
      value={props.id}
      name="artist"
      />
      <button type="submit">Submit</button>
    </form>
  )
} 
export default New_Message

