import React from "react";
import "../Notifications/notificationmodal.css";
import NotificationArrayList from "../../array/ModalArrayList/NotificationArrayList";

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
        <div className="notification_body">
          {NotificationArrayList.map((dat) => {
            return (
              <>
                <div className="individual_notification">
                  <div className="individual_notification_div__left">
                    <ion-icon
                      name={dat.icon}
                      style={{ background: `${dat.bg}` }}
                    ></ion-icon>
                  </div>
                  <div className="individual_notification_div__right">
                    <div className="row1">
                      <h3>{dat.name}</h3>
                      <small>{dat.time}</small>
                    </div>
                    <div className="row2">
                      <ion-icon name={dat.right_arr}></ion-icon>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
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
