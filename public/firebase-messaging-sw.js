importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

firebase.initializeApp({
  apiKey: "AIzaSyACUBEIYz2NlTtmbVMrZ6h2QZMjf4YAXms",
  authDomain: "wooah-8701b.firebaseapp.com",
  projectId: "wooah-8701b",
  storageBucket: "wooah-8701b.appspot.com",
  messagingSenderId: "905530864061",
  appId: "1:905530864061:web:4155ce12c3e6a88b15a2d4",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );

  self.registration.showNotification(payload?.data?.title, payload?.data);
});

self.addEventListener("notificationclick", function (event) {
  const { data } = event.notification;
  const parsedData = JSON.parse(data);
  const url = "/" ?? `/${parsedData.link}`;
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        console.log("clientList", clientList);
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          console.log("client", client);
          if (client.url == "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(url);
      }),
  );
});
