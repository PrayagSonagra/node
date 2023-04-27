const express = require("express");

const controller = require("../controller/controller");
const router = express.Router();

router.get("/homepage", controller.homepage);

router.post("/createCustomer", controller.createCustomer);

router.get("/getAllCustomers", controller.getAllCustomers);

router.get("/getCustomer/:id", controller.getCustomer);

router.put("/updateCustomer/:id", controller.updateCustomer);

router.delete("/deleteCustomer/:id", controller.deleteCustomer);

module.exports = router;
