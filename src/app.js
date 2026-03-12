
import express from "express";
import helmet from "helmet";
import session from "express-session";
import flash from "connect-flash";
import methodOverride from "method-override";

import taskRoutes from "./routes/taskRoutes.js";
import webRoutes from "./routes/webRoutes.js";
import authRoutes from "./routes/authRoutes.js"; 


const app = express();

// Security
app.use(helmet());
app.disable("x-powered-by");

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session
app.use(
  session({
    secret: "lab3secret",
    resave: false,
    saveUninitialized: true
  })
);

// Flash messages
app.use(flash());

// Make flash available in views
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  next();
});

// Allow PUT/DELETE in forms
app.use(methodOverride("_method"));

// Template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Web pages
app.use("/", webRoutes);

// API routes
app.use("/tasks", taskRoutes);

// AUTH ROUTES
app.use("/auth", authRoutes); 


export default app;
