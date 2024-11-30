const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

const PORT = 8080;
const uri = process.env.MONGO_URI;

mongoose.connect(uri);

mongoose.connection
    .once('open', ()=> {
        console.log("MongoDb is connected successfully...");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .on('error', (error) => {
        console.log('Error: ', error);
    });