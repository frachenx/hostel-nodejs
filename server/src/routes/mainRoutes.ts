import { Router } from "express";
import { mainController } from "../controllers/mainController";

class MainRoute{
    public router:Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.post('/user-login',mainController.userLogin);
        this.router.post('/admin-login',mainController.adminLogin);
        this.router.post('/user-registration',mainController.userRegistration);
    }
}

const mainRouter = new MainRoute();

export default mainRouter.router;