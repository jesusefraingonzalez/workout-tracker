const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const PORT = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(apiRoutes);
app.use(htmlRoutes);

// begin server
app.listen(PORT, ()=> {
    console.log(`Server now running on port ${PORT}`);
});
