// Import the Express function, from the Express web application framework, into our TypeScript file.
import express from "express";

// Create an Express application instance and assign it to the 'app' variable.
const app = express();

// Middleware is a function that executes during the HTTP request-response cycle
// and can inspect, process, modify, or reject incoming requests.

// Register JSON request-body parsing middleware with the Express application.
// This middleware parses incoming JSON request bodies and makes the parsed
// data accessible to route handlers and controllers through req.body
app.use(express.json());

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