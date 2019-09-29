"use strict";
const User = require("./requestModel");
// Helper function to list each of the requests in the database
exports.listRequests = async () => {
  try {
    const requests = Request.find({});
    return requests;
  } catch (e) {
    throw e;
  }
};
// Create a new request that will be added to the database
exports.createRequest = async requestData => {
  // 1. Create a request instance
  const request = new Request(requestData);
  try {
    // 2. Save request to database
    const doc = await request.save();
    // 3. return with created user
    return doc;
  } catch (e) {
    // 4. If error, throw and controller will catch
    throw e;
  }
};
