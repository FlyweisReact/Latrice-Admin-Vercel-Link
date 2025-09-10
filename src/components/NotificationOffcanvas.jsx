import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import EmptyNotification from "../assets/images/EmptyNotification.png"; // adjust path

const NotificationOffcanvas = ({ showNotification, setShowNotification }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Headline...",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Headline...",
      message:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      title: "Headline...",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]);

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const deleteAll = () => {
    setNotifications([]);
  };

  return (
    <>
      {/* Overlay - only visible when open */}
      {showNotification && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setShowNotification(false)}
        />
      )}

      {/* Offcanvas Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-[506px] bg-[#FAF9F6] z-50 transform transition-transform duration-300 ease-in-out
        ${showNotification ? "translate-x-0" : "translate-x-full"} 
        ${!showNotification && "pointer-events-none"}`}
        style={{
          boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2F2F2F]">
          <h2 className="font-rasa font-medium text-[20px] text-[#2F2F2F]">
            Notifications
          </h2>
          <button
            onClick={() => setShowNotification(false)}
            className="text-[#2F2F2F] hover:text-gray-700"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        {/* Notifications / Empty */}
        <div className="overflow-y-auto h-[calc(100vh-120px)] px-3">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <img
                src={EmptyNotification}
                alt="No Notifications"
                className="max-w-[200px] w-full"
              />
              <h3 className="mt-6 font-rasa font-semibold text-[18px] text-[#2F2F2F]">
                No Notifications
              </h3>
              <p className="text-[#2F2F2F80] text-[14px] font-rasa">
                Notification Inbox Empty
              </p>
            </div>
          ) : (
            <div className="space-y-3 py-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex justify-between items-start bg-white rounded-xl p-4 border border-[#EEEEEE]"
                  style={{
                    boxShadow:
                      "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
                  }}
                >
                  <div className="flex-1">
                    <h3 className="font-rasa font-semibold text-[16px] text-[#2F2F2F]">
                      {notification.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#2F2F2F80] font-rasa leading-snug">
                      {notification.message}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="ml-3 text-[#AE0000] hover:text-red-600 border border-[#AE0000] rounded-full p-1"
                  >
                    <RiDeleteBin6Line className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Delete All Button */}
        {notifications.length > 0 && (
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center px-4 ">
            <div className="border border-[#FE5C73] rounded-[6px] px-2">
                <button
              onClick={deleteAll}
              className="w-full sm:w-[220px] py-2 border border-[#FE5C73] text-[#FE5C73] font-bold rounded-md hover:bg-[#FE5C73] hover:text-white"
            >
              Delete All Notifications
            </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationOffcanvas;
