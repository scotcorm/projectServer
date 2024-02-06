const express = require('express');
const dataRouter = express.Router();

dataRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all of the data to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the data: ${req.body.name} with description ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /data');
  })
  .delete((req, res) => {
    res.end('Deleting all data');
  });

dataRouter
  .route('/:dataId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the data: ${req.params.dataId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /data/${req.params.dataId}`);
  })
  .put((req, res) => {
    res.write(`Updating the data: ${req.params.dataId}\n`);
    res.end(`Will update the data: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting data: ${req.params.dataId}`);
  });

module.exports = dataRouter;
