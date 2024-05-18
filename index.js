const express = require("express");
const hbs = require("hbs");
const path = require("path");
const router = require("./src/router/router");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 3005;

// Path setup
const static_Path = path.join(__dirname, "./public");
const view_path = path.join(__dirname, "./template/views");
const partial_path = path.join(__dirname, "./template/partials");


// Built-in middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); // Parse data from HTML forms
app.use(express.static(static_Path));
app.use(router);


// Set Handlebars
app.set("view engine", "hbs");
app.set("views", view_path);

// Register Partials
hbs.registerPartials(partial_path);

// Run the server
app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});
