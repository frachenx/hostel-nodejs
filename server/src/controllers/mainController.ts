import {json,Request,Response} from 'express'
import conn from '../database';
import bcrypt, { hash } from 'bcrypt'

class MainController{

    userLogin(req:Request,res:Response){
        conn.query('SELECT user_id,user_password FROM USERS WHERE user_email=?',[req.body.email],(err,result,fields)=>{
            if(err){
                res.json(err);
            }else{
                let hash0:string = result[0].user_password;
                hash0 = hash0.replace('$2y$',"$2a$")
                bcrypt.compare(req.body.password,hash0,(errHash,resultHash)=>{
                    if(errHash){
                        res.json(errHash);
                    }else{
                        if(resultHash){
                            res.json([{response:'true',id:result[0].user_id}]);
                        }else{
                            res.json([{response:'false',id:0}]);
                        }
                    }
                })
            }
            
        });
    }

    
    adminLogin(req:Request,res:Response){
        conn.query('SELECT admin_id,admin_password FROM ADMIN WHERE admin_username=?',[req.body.username],(err,result,fields)=>{
            let hash0:string = result[0].admin_password;
            hash0 = hash0.replace('$2y$','$2a$') 
            bcrypt.compare(req.body.password,hash0,(errHash,resultHash)=>{
                if(errHash){
                    res.json(err);
                }else{
                    if(resultHash){
                        res.json([{response:'true',id:result[0].admin_id}]);
                    }else{
                        res.json([{response:'false',id:0}]);
                    }
                }
            })
        });
    }

    userRegistration(req:Request,res:Response){
        console.log(req.body);
        let hash0:string="";
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            hash0 = hash;
            console.log(hash);
            conn.query('INSERT INTO USERS (user_reg_num,user_fname,user_mname,user_lname,user_gender,user_contact_num,user_email,user_password) VALUES(?,?,?,?,?,?,?,?)',[req.body.regNum,req.body.firstName,req.body.middleName,req.body.lastName,req.body.gender,req.body.contactNum,req.body.email,hash0],(err,result,fields)=>{
                if(err){
                    res.json(err);
                }else{
                    if(result.affectedRows =='1'){
                        res.json({response:true,id:result.insertId})
                    }
                }
            })
        })
    }
}

export const mainController =  new MainController();