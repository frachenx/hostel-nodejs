"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
const userController_1 = require("../controllers/userController");
class UserRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', userController_1.userController.getUser);
        this.router.put('/:id', userController_1.userController.updateUser);
        this.router.get('/reg/:regNum', adminController_1.adminController.getStudentByRegNum);
        this.router.post('/check-password', userController_1.userController.checkPassword);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.router;
