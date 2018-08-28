const express = require('express');

const admin = require('firebase-admin');
const cors = require('cors');
const functions = require('firebase-functions');
const helmet = require('helmet');

const setupTestDataRoute = require('./routes/setup-test-data');
const teardownTestDataRoute = require('./routes/teardown-test-data');

admin.initializeApp(functions.config().firebase);

const app = express();

app.set('trust proxy', true);
app.use(helmet());
app.use(cors({ origin: true }));
app.use('/setup-test-data', setupTestDataRoute(admin));
app.use('/teardown-test-data', teardownTestDataRoute(admin));

exports.app = functions.https.onRequest(app);
