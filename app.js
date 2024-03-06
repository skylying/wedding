// app.js

// Import the Express module
import express from 'express';
import path from 'path';

// Create an instance of the Express application
const app = express();
const __dirname = import.meta.dirname;

// Serve static files from the 'public' folder
const publicPath = path.resolve(__dirname, 'public');
console.log(__dirname);
//process.exit();

//app.use(express.static(publicPath));
app.use(express.static('public'));

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




// // Firebase app example
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB_NZp0ZMtT2h5KHC2RX_JNPDDKwINb2C8",
//   authDomain: "wedding-223be.firebaseapp.com",
//   projectId: "wedding-223be",
//   storageBucket: "wedding-223be.appspot.com",
//   messagingSenderId: "950666858866",
//   appId: "1:950666858866:web:37d258e8b1fca3fc518deb",
//   measurementId: "G-EJ2LCXKHKM"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Run $firebase deploy
