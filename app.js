const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>CI/CD Pipeline Demo</h1>
        <p>Application deployed automatically using AWS CodePipeline.</p>
        <p>Hostname: ${os.hostname()}</p>
    `);
});

app.listen(3000, () => {
    console.log('Application running on port 3000');
});