import express from "express";

import exampleRoute from "./src/routes/index.js";

const app = express();
const PORT = 8000;

app.get("/", function (req, res) {
  const response = {
    message: "Backend Starter",
    routes: [
      {
        desc: "Example Route",
        route: "/example",
      },
    ],
  };

  res.status(200).json(response);
});

// Example Route
app.use(exampleRoute);

app.listen(PORT, function () {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
