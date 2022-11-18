import React from "react";
import Collapsible from "react-collapsible";

const Message = (props) => {
  // console.log(props.message)
  // console.log(props.id)
  // console.log(props.actuallyDeleteMessage)
  return (
    <section className="collapsible">
      <Collapsible
        trigger="View Messages"
        triggerStyle={{
          borderRadius: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        {props.message.map((message, index) => {
          // {console.log(message.artist)}
          // {console.log(message._id)}
          {
            if (props.id == message.artist) {
              return (
                <span key={index}>
                  <div className="pt-3">{message.message}</div>
                  <input
                    type="button"
                    value="Delete"
                    onClick={props.deleteMessage}
                    id={message._id}
                  />
                </span>
              );
            }
          }
        })}
      </Collapsible>
    </section>
  );
};

export default Message;
