import { Router } from "express";
import { adminController } from "../controllers/adminController";
import { userController } from "../controllers/userController";

class UserRoute{
    public router:Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/:id',userController.getUser);
        this.router.put('/:id',userController.updateUser);
        this.router.get('/reg/:regNum',adminController.getStudentByRegNum);
        this.router.post('/check-password',userController.checkPassword);
    }
}

const userRoute = new UserRoute();

export default userRoute.router;