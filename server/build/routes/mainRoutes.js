"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainController_1 = require("../controllers/mainController");
class MainRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/user-login', mainController_1.mainController.userLogin);
        this.router.post('/admin-login', mainController_1.mainController.adminLogin);
        this.router.post('/user-registration', mainController_1.mainController.userRegistration);
    }
}
const mainRouter = new MainRoute();
exports.default = mainRouter.router;
