/*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/

var AWS = require("aws-sdk");
exports.handler = (event, context, callback) => {
  var lambda = new AWS.Lambda()
  // insert code to be executed by your lambda trigger
  const env = process.env.ENV
  const functionName = 'WGCCreateUser-' + env
  const payload = event
  lambda.invoke({
      FunctionName: functionName,
      Payload: JSON.stringify(payload)
  }).promise()
  .then(response0 => {
    const response = JSON.parse(response0.Payload)
    console.log("Lambda with AppSync access called", response)
    callback(null, event);
  })
  .catch(err => {
    console.log(err)
    callback(null, event)
  })
};