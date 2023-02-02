import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    width: "100%",
    maxWidth: "500px",
    padding: ".5rem",
    margin: "0 auto",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    borderRadius: "2rem",
    fontSize: "1.2rem",
    fontFamily: "sans-serif"
  };

  let flex = {
    width: "100%",
    height: "calc(100vh - 5rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  return (
    <div style={flex}>
      <div style={styles}>
        {/* <p>{msg}</p> */}
        <p dangerouslySetInnerHTML={{ __html: msg }} />
      </div>
    </div>
  );
};

export default Message;
