// middleware/logRequest.js
export default function logRequest(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
}
