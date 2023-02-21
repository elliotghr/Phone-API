import React from "react";
import "./Message.css";

const Message = ({ msg, bgColor }) => {
  let styles = {
    backgroundColor: bgColor,
  };

  return (
    <div className="message">
      <div className="message-container" style={styles}>
        {/* <p>{msg}</p> */}
        <p dangerouslySetInnerHTML={{ __html: msg }} />
      </div>
    </div>
  );
};

export default Message;
