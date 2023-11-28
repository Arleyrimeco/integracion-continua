// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,

  firebaseConfig :{
    apiKey: "AIzaSyABPswdX3HGLWo5lOWpzj4g_dCj7mbHkvw",
    authDomain: "appmascotas-681e4.firebaseapp.com",
    projectId: "appmascotas-681e4",
    storageBucket: "appmascotas-681e4.appspot.com",
    messagingSenderId: "69737147813",
    appId: "1:69737147813:web:32a889b403dcef4fb98c4c"
  },
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
};

// Your web app's Firebase configuration
 


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
