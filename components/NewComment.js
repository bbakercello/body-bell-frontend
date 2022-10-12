import React, { useState } from 'react'

const NewComment = (props) => {
    // console.log(props.session)
    const [newComment, setNewComment] = useState ({
      user: '',
      post: ''
    })}