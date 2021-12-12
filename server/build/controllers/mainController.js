"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class MainController {
    userLogin(req, res) {
        database_1.default.query('SELECT user_id,user_password FROM USERS WHERE user_email=?', [req.body.email], (err, result, fields) => {
            if (err) {
                res.json(err);
            }
            else {
                let hash0 = result[0].user_password;
                hash0 = hash0.replace('$2y$', "$2a$");
                bcrypt_1.default.compare(req.body.password, hash0, (errHash, resultHash) => {
                    if (errHash) {
                        res.json(errHash);
                    }
                    else {
                        if (resultHash) {
                            res.json([{ response: 'true', id: result[0].user_id }]);
                        }
                        else {
                            res.json([{ response: 'false', id: 0 }]);
                        }
                    }
                });
            }
        });
    }
    adminLogin(req, res) {
        database_1.default.query('SELECT admin_id,admin_password FROM ADMIN WHERE admin_username=?', [req.body.username], (err, result, fields) => {
            let hash0 = result[0].admin_password;
            hash0 = hash0.replace('$2y$', '$2a$');
            bcrypt_1.default.compare(req.body.password, hash0, (errHash, resultHash) => {
                if (errHash) {
                    res.json(err);
                }
                else {
                    if (resultHash) {
                        res.json([{ response: 'true', id: result[0].admin_id }]);
                    }
                    else {
                        res.json([{ response: 'false', id: 0 }]);
                    }
                }
            });
        });
    }
    userRegistration(req, res) {
        console.log(req.body);
        let hash0 = "";
        bcrypt_1.default.hash(req.body.password, 10, (err, hash) => {
            hash0 = hash;
            console.log(hash);
            database_1.default.query('INSERT INTO USERS (user_reg_num,user_fname,user_mname,user_lname,user_gender,user_contact_num,user_email,user_password) VALUES(?,?,?,?,?,?,?,?)', [req.body.regNum, req.body.firstName, req.body.middleName, req.body.lastName, req.body.gender, req.body.contactNum, req.body.email, hash0], (err, result, fields) => {
                if (err) {
                    res.json(err);
                }
                else {
                    if (result.affectedRows == '1') {
                        res.json({ response: true, id: result.insertId });
                    }
                }
            });
        });
    }
}
exports.mainController = new MainController();
