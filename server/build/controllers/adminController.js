"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const database_1 = __importDefault(require("../database"));
class AdminController {
    students(req, res) {
        database_1.default.query(`SELECT
        student_id AS id,
        room_id AS room,
        student_food AS food, 
        student_stay_from AS stayFrom,
        student_duration AS duration,
        course_id AS course,
        student_reg_num AS regNum,
        student_fname AS fName,
        student_lname AS lName,
        student_mname AS mName,
        student_gender AS gender,
        student_contact AS contact,
        student_email AS email,
        student_emergency_contact AS emContact,
        student_guardian_name AS guardName,
        student_guardian_relation AS guardRel,
        student_guardian_contact_num AS guardContact,
        student_corr_address AS corrAddress,
        student_corr_city AS corrCity,
        student_corr_state AS corrState,
        student_corr_pin AS corrPin,
        student_perm_address AS permAddress,
        student_perm_city AS permCity,
        student_perm_state AS permState,
        student_perm_pin AS permPin
        FROM STUDENTS`, (err, result, fields) => {
            res.json(result);
        });
    }
    getStudent(req, res) {
        const { id } = req.params;
        database_1.default.query(`SELECT
        student_id AS id,
        STUDENTS.room_id AS room,
        student_food AS food, 
        student_stay_from AS stayFrom,
        student_duration AS duration,
        STUDENTS.course_id AS course,
        student_reg_num AS regNum,
        student_fname AS fName,
        student_lname AS lName,
        student_mname AS mName,
        student_gender AS gender,
        student_contact AS contact,
        student_email AS email,
        student_emergency_contact AS emContact,
        student_guardian_name AS guardName,
        student_guardian_relation AS guardRel,
        student_guardian_contact_num AS guardContact,
        student_corr_address AS corrAddress,
        student_corr_city AS corrCity,
        student_corr_state AS corrState,
        student_corr_pin AS corrPin,
        student_perm_address AS permAddress,
        student_perm_city AS permCity,
        student_perm_state AS permState,
        student_perm_pin AS permPin,
        room_num AS room_name,
        room_seater AS room_seater,
        course_name_full  AS course_name,
        room_fee AS room_fee
        FROM STUDENTS,ROOMS,COURSES WHERE ROOMS.room_id=STUDENTS.room_id AND COURSES.course_id=STUDENTS.course_id AND student_id=?`, [id], (err, result, fields) => {
            if (err)
                res.json(err);
            res.json(result[0]);
        });
    }
    deleteStudent(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM STUDENTS WHERE student_id=?', [id], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                if (result.affectedRows == '1') {
                    res.json([{ response: 'true' }]);
                }
                else {
                    res.json([{ response: 'false' }]);
                }
            }
        });
    }
    registerStudent(req, res) {
        database_1.default.query('INSERT INTO STUDENTS (room_id,student_food,student_stay_from,student_duration,course_id,student_reg_num,student_fname,student_lname,student_mname,student_gender,student_contact,student_email,student_emergency_contact,student_guardian_name,student_guardian_relation,student_guardian_contact_num,student_corr_address,student_corr_city,student_corr_state,student_corr_pin,student_perm_address,student_perm_city,student_perm_state,student_perm_pin) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.room, req.body.food, req.body.stayFrom, req.body.duration, req.body.course, req.body.regNum, req.body.fName, req.body.lName, req.body.mName, req.body.gender, req.body.contact, req.body.email, req.body.emContact, req.body.guardName, req.body.guardRel, req.body.guardContact, req.body.corrAddress, req.body.corrCity, req.body.corrState, req.body.corrPin, req.body.permAddress, req.body.permCity, req.body.permState, req.body.permPin], (err, result, fields) => {
            console.log(result);
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    getStudentByRegNum(req, res) {
        const { regNum } = req.params;
        database_1.default.query(`SELECT
        student_id AS id,
        STUDENTS.room_id AS room,
        student_food AS food, 
        student_stay_from AS stayFrom,
        student_duration AS duration,
        STUDENTS.course_id AS course,
        student_reg_num AS regNum,
        student_fname AS fName,
        student_lname AS lName,
        student_mname AS mName,
        student_gender AS gender,
        student_contact AS contact,
        student_email AS email,
        student_emergency_contact AS emContact,
        student_guardian_name AS guardName,
        student_guardian_relation AS guardRel,
        student_guardian_contact_num AS guardContact,
        student_corr_address AS corrAddress,
        student_corr_city AS corrCity,
        student_corr_state AS corrState,
        student_corr_pin AS corrPin,
        student_perm_address AS permAddress,
        student_perm_city AS permCity,
        student_perm_state AS permState,
        student_perm_pin AS permPin,
        room_num AS room_name,
        room_seater AS room_seater,
        course_name_full  AS course_name,
        room_fee AS room_fee
        FROM STUDENTS,ROOMS,COURSES WHERE ROOMS.room_id=STUDENTS.room_id AND COURSES.course_id=STUDENTS.course_id AND student_reg_num=?`, [regNum], (err, result, fields) => {
            res.json(result[0]);
        });
    }
    rooms(req, res) {
        database_1.default.query(`SELECT 
            room_id  AS id,
            room_num AS roomNumber,
            room_seater AS seater,
            room_fee AS fee,
            room_post_date AS postingDate 
        FROM ROOMS`, (err, result, fields) => {
            res.json(result);
        });
    }
    deleteRoom(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM ROOMS WHERE room_id=?', [id], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    getRoom(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT room_id AS id,room_num AS roomNumber, room_seater AS seater, room_fee AS fee, room_post_date AS postingDate FROM ROOMS WHERE room_id=?', [id], (err, result, fields) => {
            res.json(result[0]);
        });
    }
    updateRoom(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE ROOMS SET room_num=?,room_seater=?,room_fee=? WHERE room_id=?', [req.body.roomNumber, req.body.seater, req.body.fee, req.body.id], (err, result, fields) => {
            if (err) {
                res.json({ response: 'false' });
            }
            else {
                res.json({ response: 'true' });
            }
        });
    }
    addRoom(req, res) {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let todayString;
        todayString = yyyy + '/' + mm + '/' + dd;
        database_1.default.query('INSERT INTO ROOMS (room_num,room_seater,room_fee,room_post_date) VALUES(?,?,?,?) ', [req.body.roomNumber, req.body.seater, req.body.fee, todayString], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    courses(req, res) {
        database_1.default.query(`SELECT 
            course_id AS id,
            course_code AS code,
            course_name_short AS shortName,
            course_name_full AS fullName,
            course_created_date AS createdDate
        FROM COURSES`, (err, result, fields) => {
            res.json(result);
        });
    }
    deleteCourse(req, res) {
        const { id } = req.params;
        database_1.default.query('DELETE FROM COURSES WHERE course_id=?', [id], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    getCourse(req, res) {
        const { id } = req.params;
        database_1.default.query('SELECT course_id  AS id, course_code AS code, course_name_short AS shortName, course_name_full AS fullName, course_created_date AS createdDate FROM COURSES WHERE course_id=?', [id], (err, result, fields) => {
            res.json(result);
        });
    }
    updateCourse(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE COURSES SET course_code=?,course_name_short=?,course_name_full=? WHERE course_id=?', [req.body.code, req.body.shortName, req.body.fullName, req.body.id], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
    addCourse(req, res) {
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        let todayString;
        todayString = yyyy + '/' + mm + '/' + dd;
        database_1.default.query('INSERT INTO COURSES (course_code,course_name_short,course_name_full,course_created_date) VALUES(?,?,?,?) ', [req.body.code, req.body.shortName, req.body.fullName, todayString], (err, result, fields) => {
            if (err) {
                res.json([{ response: 'false' }]);
            }
            else {
                res.json([{ response: 'true' }]);
            }
        });
    }
}
exports.adminController = new AdminController();
