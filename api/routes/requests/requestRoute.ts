const express = require("express");
const router = express.Router();
const requestService = require("./requestService");

// routes
router.route("/").get(async (req, res, next) => {
  try {
    // 1. Fetch all requests from database
    const users = await requestService.listUsers();
    // 2. Respond with list of users
    res.status(200).send({
      data: users
    });
  } catch (e) {
    // 3. If error, send to the error handler
    next(e);
  }
});
// POST /requests/
router.route("/").post(async (req, res, next) => {
  // 1. Get data from request body
  // Format of the request for this destructuring would look like:
  /*
      {
        "userData": {
          "name": "Bob huntij",
          "address": "200 Wellington Street, Toronto",
          "age": 23,
          "credit card info":{
            "numbers":4651231624676,
            "date":07-20-2020,
            "security number": 665
          },

        }
      }
    */
  // Play around with the destructuring if you would like the request to be sent in a different way
  const { userData } = req.body;
  try {
    // 2. Create user from data
    const request = await requestService.createRequest(requestData);
    // 3. Respond with created request
    res.status(200).send({
      data: [request]
    });
  } catch (e) {
    // 4. If error, send to the error handler
    next(e);
  }
});
exports.router = router;
