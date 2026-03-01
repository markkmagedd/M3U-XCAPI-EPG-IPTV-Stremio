// Vercel serverless entry point.
// Imports the full Express app from server.js (which skips app.listen() when imported).
const app = require("./server");
module.exports = app;
