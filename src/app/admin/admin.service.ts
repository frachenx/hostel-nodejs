import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.model';
import { Room } from './room.model';
import { Student } from './student.model';
import { User } from '../user/user.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  addCourse(course:Course){
    return this.http.post<any>(`${this.baseUrl}admin/courses/add`,course);
  }

  getCourses(){
    return this.http.get<Course[]>(`${this.baseUrl}admin/courses`)
  }

  getCourse(id:string){
    return this.http.get<Course[]>(`${this.baseUrl}admin/courses/${id}`)
  }

  updateCourse(course:Course){
    return this.http.put<any>(`${this.baseUrl}admin/courses/${course.id}`,course)  
  }

  deleteCourse(id:number){
    return this.http.delete<any>(`${this.baseUrl}admin/courses/${id}`)
  }

  addRoom(room:Room){
    return this.http.post<any>(`${this.baseUrl}admin/rooms/add`,room)
  }

  getRooms(){
    return this.http.get<Room[]>(`${this.baseUrl}admin/rooms`)
  }

  getRoom(id:string){
    return this.http.get<Room>(`${this.baseUrl}admin/rooms/${id}`)
  }

  updateRoom(room:Room){
    return this.http.put<any>(`${this.baseUrl}admin/rooms/${room.id}`,room)
  }

  deleteRoom(id:string){
    return this.http.delete<any>(`${this.baseUrl}admin/rooms/${id}`);
  }

  registerStudent(student:Student){
    return this.http.post<any>(`${this.baseUrl}admin/students/register`,student);
  }

  getStudents(){
    return this.http.get<Student[]>(`${this.baseUrl}admin/students`);
  }

  deleteStudent(id:string){
    return this.http.delete<any>(`${this.baseUrl}admin/students/${id}`);
  }

  getStudent(id:string){
    return this.http.get<Student>(`${this.baseUrl}admin/students/${id}`);
  }

  getStudentByRegNum(regNum:string){
    return this.http.get<Student>(`${this.baseUrl}user/reg/${regNum}`)
  }

  getUser(id:string){
    return this.http.get<User>(`${this.baseUrl}user/${id}`);
  }

  updateUser(user:User){
    return this.http.put<any>(`${this.baseUrl}user/${user.id}`,user)
  }

  checkUserPassword(user:any){
    return this.http.post<any>(`${this.baseUrl}user/check-password`,user);
  }



}
