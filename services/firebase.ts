import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyACUBEIYz2NlTtmbVMrZ6h2QZMjf4YAXms",
  authDomain: "wooah-8701b.firebaseapp.com",
  projectId: "wooah-8701b",
  storageBucket: "wooah-8701b.appspot.com",
  messagingSenderId: "905530864061",
  appId: "1:905530864061:web:4155ce12c3e6a88b15a2d4",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAppCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6LdYzloeAAAAAPono-Zyv_Eh2bNH4g2FwES9X19M"),
  isTokenAutoRefreshEnabled: true,
});

export default firebaseApp;
