const express = require('express')
const router = express.Router()

// Middleware to Sanitise URL params
const {add_params_to_res_locals} = require("../modules/sanitise_tools")

// Controller for Matter
const controller = require("../controllers/json")

// Sanitise Parameters and add to res.locals.sanitised_parameters

// Route Controllers

router.get("/", controller.playground)
router.get("/v2", controller.playgroundv2)
router.get("/v3", controller.playgroundv3)
router.get("/v4", controller.playgroundv4)
router.get("/v5", controller.playgroundv5)
router.get("/v6", controller.playgroundv6)
router.get("/v7", controller.playgroundv7) // STAGE
router.get("/v8", controller.playgroundv8) // TOO COMPLICATED
router.get("/v9", controller.playgroundv9) // BACK TO V8
router.get("/v10", controller.playgroundv10) // BACK TO V8


module.exports = router