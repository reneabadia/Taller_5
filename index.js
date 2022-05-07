import express from "express";

import router from "./routes/users.js";

const app = express();

app.use("/", router)

app.listen(3000, () => {
    console.log("Server Runing OK in PORT 3000")
})