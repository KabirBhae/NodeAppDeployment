const express = require('express');
const app = express();

// require("dotenv").config({path:"./.env"})
require("dotenv").config();

app.get("/", (req, res) => {
	res.send("Welcome to hosting from Azure");
});

port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log("Server running on port", port,"...");
});
