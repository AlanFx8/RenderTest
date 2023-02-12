const express = require('express');
const asyncHandler = require('express-async-handler');

//Create router
const router = express.Router();

//@desc GET test message
//@route GET /api/test
//@acess Private
const _getMessage = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Hello from the server-side!"});
});

//Routes
router.route("/").get(_getMessage);

//Exports
module.exports = router;