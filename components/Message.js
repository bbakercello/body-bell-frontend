import React from 'react';
import Collapsible from 'react-collapsible';


const Message = (props) => {


    return (
        <section className="collapsible">
            <Collapsible 
                className="comment-title" 
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
                {props.message.map((message, index)=>
                    <span className="message" key={index}>
                        <div className='messageContent'>{ message.message }</div>
                    </span>
                )}
            </Collapsible>
        </section>
)}

export default Message