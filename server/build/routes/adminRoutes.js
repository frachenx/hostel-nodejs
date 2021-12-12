"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
class AdminRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/students', adminController_1.adminController.students);
        this.router.delete('/students/:id', adminController_1.adminController.deleteStudent);
        this.router.get('/students/:id', adminController_1.adminController.getStudent);
        this.router.post('/students/register', adminController_1.adminController.registerStudent);
        this.router.get('/students/reg/:regNum', adminController_1.adminController.getStudentByRegNum);
        this.router.get('/rooms', adminController_1.adminController.rooms);
        this.router.delete('/rooms/:id', adminController_1.adminController.deleteRoom);
        this.router.get('/rooms/:id', adminController_1.adminController.getRoom);
        this.router.put('/rooms/:id', adminController_1.adminController.updateRoom);
        this.router.post('/rooms/add', adminController_1.adminController.addRoom);
        this.router.get('/courses', adminController_1.adminController.courses);
        this.router.delete('/courses/:id', adminController_1.adminController.deleteCourse);
        this.router.get('/courses/:id', adminController_1.adminController.getCourse);
        this.router.put('/courses/:id', adminController_1.adminController.updateCourse);
        this.router.post('/courses/add', adminController_1.adminController.addCourse);
    }
}
const adminRouter = new AdminRoute();
exports.default = adminRouter.router;
