// Import the Express function, from the Express web application framework, into our TypeScript file.
import express from "express";

// Create an Express application instance and assign it to the 'app' variable.
const app = express();

// Define the server port.
// A port is a numbered communication endpoint through which network traffic can reach an application.
const PORT = 3000;

// Start the HTTP server and listen for incoming requests on the specified port.
// Report an error if the server fails to start.
app.listen(PORT, (error) => {
  if (error) {
    console.error("The Well Server failed to start:", error);
    return;
  }
    console.log(`The Well Server is running on port ${PORT}!`);
});