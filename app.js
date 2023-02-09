const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to hosting from Azure");
});

app.listen(8000, () => {
	console.log("Server running on port 8000...");
});
