import React from "react";
import "../Notifications/notificationmodal.css";

const NotificationsModal = ({ handleNotificationModal }) => {
  return (
    <>
      <div className="wrappaer" onClick={handleNotificationModal}></div>
      <div className="notification_container">
        <div className="notification_heading">
          <div className="notification_title">
            <h3>notifications</h3>
            <p>Mark all Read</p>
          </div>
          <p>You have 4 unread notifications</p>
        </div>
        <div className="notification_body"></div>
        <div className="notification_footer">
          <button type="submit" className="modal_btn">
            view all
          </button>
        </div>
      </div>
    </>
  );
};

export default NotificationsModal;
