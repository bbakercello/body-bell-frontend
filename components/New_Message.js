import React, { useState } from 'react'
import Collapsible from 'react-collapsible'


const New_Message = (props) => {


  const HEROKU = process.env.NEXT_PUBLIC_BACKEND

  const [newMessage, setNewMessage] = useState ({
    message: '',
    artist: ''
  })}

  const handleChangeMessage = (e) => {
        setNewMessage({...newMessage, [e.target.name]: e.target.value})
    }
    
  const handleSubmit  = async (e) => {
    const url = `${HEROKU}`+ 'messages'

    e.preventDefault()
    try{
      const data = {...newMessage}
      const updateMessage = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/JSON"
        }
      })
          
      props.getArtist();
      setNewMessage({
        message: '',
        artist: ''
      })
    }
    catch(err){
      console.log(err)
    }

  return (
    <section className="collapsible">
    <Collapsible 
    trigger = 'new message'>
      {/* <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="post"
      value={newMessage.message}
      onChange={handleChangeMessage}
      />
      <input
      type="hidden"
      name="artist"
      value = {props.mongoId}
      />
     <input
      type="submit"
      name="newMessage"
       />
      </form> */}
      <div>hello</div>
    </Collapsible>
    </section>
  )
} 
export default New_Message