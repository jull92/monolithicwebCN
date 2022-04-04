const express = require("express");
const app = express();
const port = 5000;

app.use("/static", express.static("public"));

// while the app is listeing, it will run the anonymous function
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
