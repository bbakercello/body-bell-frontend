import React, { useState } from 'react'

const NewComment = (props) => {
    // console.log(props.session)
    const [newComment, setNewComment] = useState ({
      user: '',
      post: ''
    })}

    const handleChangeComment = (e) => {
        setNewComment({...newComment, [e.target.name]: e.target.value})
      }
    
      const handleSubmit  = async (e) => {
        e.preventDefault()
        try{
          const data = {...newComment, user: `${props.session}`, timestamp: new Date()}
          const updateComment = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/JSON"
            }
          })
          
          props.getPosts();
          setNewComment({
            user: '',
            post: ''
          })
        }
        catch(err){
          // console.log(err)
        }
      }

      export default NewComment