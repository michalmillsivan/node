const axios = require('axios');
const fs = require('fs');

const apiUrl = 'https://randomuser.me/api/';
const logFile = 'monitor.log';

setInterval(() => {
    axios.get(apiUrl)
        .then(response => {
            const dateTime = new Date().toISOString();
            const status = response.status;
            const logMessage = `[${dateTime}] - [random-users-api] - [${status}]\n`;

            fs.appendFile(logFile, logMessage, (err) => {
                if (err) throw err;
                console.log(`Logged: ${logMessage}`);
            });
        })
        .catch(error => {
            const dateTime = new Date().toISOString();
            const logMessage = `[${dateTime}] - [random-users-api] - [Error: ${error.message}]\n`;

            fs.appendFile(logFile, logMessage, (err) => {
                if (err) throw err;
                console.log(`Logged: ${logMessage}`);
            });
        });
}, 10000);

