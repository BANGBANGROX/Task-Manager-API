const express = require("express");
const app = express();

// Router
const tasks = require("./routes/tasks");

// db
const connectDB = require("./db/connect");
require("dotenv").config();

// Port
const port = process.env.PORT || 3000;

// Not found
const notFound = require("./middleware/not-found");

// Error handler
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.log(error);
  }
};

start();
