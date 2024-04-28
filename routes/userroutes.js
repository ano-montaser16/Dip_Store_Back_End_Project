const express = require("express");

const router = express.Router();

const userController = require('../controllers/usercontrollers');



router.route('/')
.get(userController.getAllUsers)
.post(userController.addNewUser)

router.route('/:userId')
.get(userController.getSingleUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)

module.exports = router;
