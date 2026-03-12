//jwtMiddleware.js
import jwt from "jsonwebtoken";

const SECRET_KEY = "super_secret_key"; 

export const verifyJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid token" });
  }
};

export const generateJWT = (user) => {
  return jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
};