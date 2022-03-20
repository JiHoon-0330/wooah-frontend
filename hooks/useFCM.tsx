import {
  getMessaging as getMessagingBySw,
  Messaging,
} from "firebase/messaging/sw";
import {
  getToken,
  onMessage,
  getMessaging,
  MessagePayload,
} from "firebase/messaging";
import { useEffect } from "react";
import firebaseApp from "../services/firebase";
import useNotificationPermission from "./useNotificationPermission";
import useFcmToken from "./useFcmToken";

const useFCM = () => {
  const { notificationPermission, setNotificationPermission } =
    useNotificationPermission();
  const { setFcmToken } = useFcmToken();

  const setNotification = ({ data }: MessagePayload) => {
    const notification = new Notification(data?.title!, data);
  };

  const getNotificationPermission = () => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
      setNotificationPermission("지원안함");
      return;
    }

    if (Notification.permission === "granted") {
      setNotificationPermission("허용");
      return;
    }

    if (Notification.permission === "denied") {
      setNotificationPermission("허용안함");
      return;
    }

    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        setNotificationPermission("허용");
      }
    });
  };

  useEffect(() => {
    if (!window) return;
    getNotificationPermission();
  }, []);

  const getFCMToken = async (messaging: Messaging) => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BJ8fmZ9kwTPOwqZTnDSi3FOwQmfNNjBjnV92yA7626JoWkdWCUS3oI_2QsW7Si_5Pak5O3fgO_aINnChq3nriYw",
      });
      if (currentToken) {
        setFcmToken(currentToken);
      } else {
        console.log("currentToken is empty");
      }
    } catch (error) {
      console.log("An error occurred while retrieving token. ", error);
    }
  };

  useEffect(() => {
    if (notificationPermission !== "허용") return;
    const messaging = getMessagingBySw(firebaseApp);
    getFCMToken(messaging);
    const message = getMessaging();
    onMessage(message, setNotification);
  }, [notificationPermission]);
};

export default useFCM;
