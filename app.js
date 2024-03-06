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
