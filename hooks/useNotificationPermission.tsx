import { useQuery } from "react-query";

type NotificationPermissionType = "지원안함" | "허용" | "허용안함" | undefined;

const useNotificationPermission = (): {
  notificationPermission: NotificationPermissionType;
  setNotificationPermission: (type: NotificationPermissionType) => void;
} => {
  const KEY = "NOTIFICATION_PERMISSION";
  const { data: notificationPermission, refetch } = useQuery(KEY, () => {
    return localStorage.getItem(KEY) as NotificationPermissionType;
  });

  const setNotificationPermission = (type: NotificationPermissionType) => {
    localStorage.setItem(KEY, type!);
    refetch();
  };

  return {
    notificationPermission,
    setNotificationPermission,
  };
};

export default useNotificationPermission;
