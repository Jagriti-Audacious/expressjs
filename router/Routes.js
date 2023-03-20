const router = require('express').Router();
const controller = require("../controller/action")
const middleware = require("../middleware/mid")

// all routers url
router.post("/create",controller.create);
router.get("/greed",middleware.Validation,controller.greet)
router.post("/signup",controller.signup)

// exporting a router instance
module.exports = router