const express = require('express');

const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// api routes;
app.use("/api", apiRoute);
// html routes;
app.use("/", htmlRoute);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))