const path = require('path');
const express = require('express');
const app = express();
const buildPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 300;

app.use(express.static(buildPath));

app.listen(port, () => {
	console.log('server is up');
});
