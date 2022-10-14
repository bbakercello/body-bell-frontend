import React from 'react';
import Collapsible from 'react-collapsible';


const Message = (props) => {
    // console.log(props.message)
    // console.log(props.id)
    // console.log(props.actuallyDeleteMessage)
    return (
        <section className="collapsible ">
            <Collapsible 
                className="comment-title  bg-slate-200" 
                trigger="View Messages"
                triggerStyle={{
                    backgroundColor: 'rgba(55, 55, 55, 0.2)', 
                    borderRadius: "10px",
                    fontSize: "16px",
                    border: "10px solid rgba(255, 255, 255, 0)",
                    marginBottom: "20px",
                    fontWeight: "bold",
                }}
            >   
                {props.message.map((message, index)=>{
                    // {console.log(message.artist)}
                    // {console.log(message._id)}
                    {if(props.id == message.artist){
                        return(
                    
                    <span className="message" key={index}>
                        <div className='messageContent pt-3'>{ message.message }</div>
                        <input
                    type="button"
                    className='deleteMessageButton'
                    value='Delete'
                    onClick= { props.deleteMessage } 
                    id = {message._id}
                    />
                    </span>
                    )
                }}})}
            </Collapsible>
        </section>
)}

export default Message


