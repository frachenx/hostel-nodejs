"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    getUser(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT user_id AS id, user_reg_num AS regNum ,user_fname AS firstName, user_mname AS middleName, user_lname AS lastName, user_gender AS gender, user_contact_num AS contactNum, user_email AS email, user_password AS password FROM USERS WHERE user_id=?', [id], (err, result, fields) => {
            res.json(result[0]);
        });
    }
    updateUser(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE USERS SET user_id =? , user_reg_num =?  ,user_fname =? , user_mname =? , user_lname =? , user_gender =? , user_contact_num =? , user_email =? , user_password =?   WHERE user_id=?', [req.body.id, req.body.regNum, req.body.firstName, req.body.middleName, req.body.lastName, req.body.gender, req.body.contactNum, req.body.email, req.body.password, id], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    checkPassword(req, res) {
        let userID = req.body.id;
        let userPassword = req.body.password;
        database_1.default.query('SELECT user_password FROM USERS WHERE user_id=?', [userID], (err, result, fields) => {
            bcrypt_1.default.compare(userPassword, result[0].user_password.replace('$2y$', '$2a$'), (err, result) => {
                if (result) {
                    res.json({ response: 'true' });
                }
                else {
                    res.json({ response: 'false' });
                }
            });
        });
    }
}
exports.userController = new UserController();
