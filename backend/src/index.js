import express from "express";
import cors from "cors";
import path from "path";
import mailRouter from "./router/mail.route.js";
import dotenv from "dotenv";

const envFile =
  process.env.NODE_ENV === "production" ? ".env.production" : ".env.dev";
dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT || 8003;
const _dirname = path.resolve(".");

app.use(cors({ origin: ["https://portfolio-o2bu.vercel.app"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/v1", mailRouter);

// Serve frontend static files
app.use(express.static(path.join(_dirname, "frontend", "dist")));

// 🔥 Fixed wildcard route
// app.get("/*", (req, res) => {
//   res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
// });

app.use("/*", (req, res) =>{
  res.sendFile(path.join(_dirname, "..", "frontend/dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
