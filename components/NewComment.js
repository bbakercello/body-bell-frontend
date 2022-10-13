import React, { useState } from 'react'

const NewMessage = (props) => {
    const HEROKU = process.env.NEXT_PUBLIC_BACKEND


    const [newMessage, setNewMessage] = useState ({
      message: '',
      artist: ''
    })}

    const handleChangeMessage = (e) => {
        setNewMessage({...newMessage, [e.target.name]: e.target.value})
      }
    
      const handleSubmit  = async (e) => {
        e.preventDefault()
        try{
          const data = {...newMessage, timestamp: new Date()}
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
          // console.log(err)
        }
      

      const url = `${HEROKU}`+ 'messages'

  return (
    <div className='newMessageForm'>
      <form onSubmit={handleSubmit}>

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
      </form>
    </div>
  )
}

export default NewMessage