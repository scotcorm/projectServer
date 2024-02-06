const express = require('express');
const chartRouter = express.Router();

chartRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all of the charts to you');
  })
  .post((req, res) => {
    res.end(
      `Will add the chart: ${req.body.name} with description ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /charts');
  })
  .delete((req, res) => {
    res.end('Deleting all charts');
  });

chartRouter
  .route('/:chartId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of the chart: ${req.params.chartId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on charts/${req.params.chartId}`);
  })
  .put((req, res) => {
    res.write(`Updating the chart: ${req.params.chartId}\n`);
    res.end(`Will update the chart: ${req.body.name}
        with description: ${req.body.description}`);
  })
  .delete((req, res) => {
    res.end(`Deleting chart: ${req.params.chartId}`);
  });

module.exports = chartRouter;
