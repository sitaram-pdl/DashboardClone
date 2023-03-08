import React from "react";
import "../Messages/messagemodal.css";
import MessageArrayList from "../../array/ModalArrayList/MessageArrayList";

const MessagesModal = ({ handleMessageModal }) => {
  return (
    <>
      <div className="wrappaer" onClick={handleMessageModal}></div>
      <div className="message_container">
        <div className="message_heading">
          <div className="message_title">
            <h3>Messages</h3>
            <p>Mark all Read</p>
          </div>
          <p>You have 4 unread messages</p>
        </div>
        <div className="message_body">
          {MessageArrayList.map((dat) => {
            return (
              <>
                <div className="individual_message">
                  <div className="individual_message_div__left">
                    <img src={dat.img} alt="" />
                  </div>
                  <div className="individual_message_div__right">
                    <h3>{dat.name}</h3>
                    <p>{dat.message}</p>
                    <small>{dat.time}</small>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="message_footer">
          <button type="submit" className="modal_btn">
            view all
          </button>
        </div>
      </div>
    </>
  );
};

export default MessagesModal;
