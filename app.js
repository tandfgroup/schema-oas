const path = require('path');
const express = require('express');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();

const app = express();

const port = 3000;

app.locals.name = require('./package.json').name || 'app';
app.locals.version = require('./package.json').version || 'latest';
app.locals.tag = `${app.locals.name}:${app.locals.version}`;

// app.use(express.static(pathToSwaggerUi));
app.use(express.static(__dirname));

app.listen(port);

console.log(`${app.locals.tag} now running on port `, port);
