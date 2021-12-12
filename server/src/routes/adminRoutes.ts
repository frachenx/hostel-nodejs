import { Router } from "express";
import { adminController } from "../controllers/adminController";

class AdminRoute{
    public router:Router=Router();
    
    constructor(){
        this.config();
    }

    config(){
        this.router.get('/students',adminController.students);
        this.router.delete('/students/:id',adminController.deleteStudent);
        this.router.get('/students/:id',adminController.getStudent);
        this.router.post('/students/register',adminController.registerStudent);
        this.router.get('/students/reg/:regNum',adminController.getStudentByRegNum)
        
        this.router.get('/rooms',adminController.rooms);
        this.router.delete('/rooms/:id',adminController.deleteRoom);
        this.router.get('/rooms/:id',adminController.getRoom);
        this.router.put('/rooms/:id',adminController.updateRoom);
        this.router.post('/rooms/add',adminController.addRoom)

        this.router.get('/courses',adminController.courses);
        this.router.delete('/courses/:id',adminController.deleteCourse);
        this.router.get('/courses/:id',adminController.getCourse);
        this.router.put('/courses/:id',adminController.updateCourse);
        this.router.post('/courses/add',adminController.addCourse);
    }
}

const adminRouter = new AdminRoute();
export default adminRouter.router 