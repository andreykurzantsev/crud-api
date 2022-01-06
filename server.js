'use strict';

import express from 'express';

const PORT = 5000;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    try {
        res.status(200).json('Server works');
    } catch (error) {
        res.status(500).json(error.message);
    }

});

let startApp = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
    } catch (error) {
        console.log('ERROR');
    }
};
startApp();