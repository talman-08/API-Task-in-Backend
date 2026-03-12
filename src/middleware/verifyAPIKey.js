//src/middleware/verifyAPIKey.js
 


export function verifyAPIKey(req, res, next) {
  const validAPIKey = "12345"; // can move to .env later
  const apiKey = req.query.apiKey || req.headers["x-api-key"];

  if (!apiKey) return res.status(401).json({ error: "API key required" });
  if (apiKey !== validAPIKey) return res.status(403).json({ error: "Invalid API key" });

  next();
}