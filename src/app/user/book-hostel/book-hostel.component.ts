import { Component, OnInit } from '@angular/core';
import {Student} from '../../admin/student.model'
import {Room} from '../../admin/room.model'
import {Course} from '../../admin/course.model'
import { AdminService } from 'src/app/admin/admin.service';
import { User } from '../user.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-book-hostel',
  templateUrl: './book-hostel.component.html',
  styleUrls: ['./book-hostel.component.css']
})
export class BookHostelComponent implements OnInit {
  rooms:Room[];
  courses:Course[];
  result:string="";
  student:Student= new Student();
  sameAddress:boolean;
  user:User= new User();
  filteredRooms:Room[];
  booked:boolean=false;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getRooms().subscribe((rooms:Room[])=>{
      console.log(rooms);
      this.rooms = rooms;
      console.log(this.rooms)
    })
    this.adminService.getCourses().subscribe((courses:Course[])=>{
      this.courses = courses;
    })

    if (localStorage.getItem('user_id')!=null){
      this.adminService.getUser(localStorage.getItem('user_id')!).subscribe((user:User)=>{
        this.user = user;
        this.student.regNum = user.regNum;
        this.student.fName = user.firstName;
        this.student.mName = user.middleName;
        this.student.lName = user.lastName;
        this.student.gender = user.gender;
        this.student.contact = user.contactNum;
        this.student.email = user.email;

        this.adminService.getStudentByRegNum(this.student.regNum).subscribe((student:Student)=>{
          if (student.id == 0){
            this.booked = false;
          }else{
            this.booked = true;
            this.student =  student;
          }
        });
      });
    }

    
  }

  roomCombo(){
    console.log(this.student.room);
    this.filteredRooms= this.rooms.filter(room=>room.id==this.student.room);
    this.student.room_seater= this.filteredRooms[0].seater;
    this.student.room_fee= this.filteredRooms[0].fee; 
    console.log(this.rooms)
    console.log(this.filteredRooms)
    console.log(this.student.room_seater)  
    console.log(this.student.room)
  }


  submit(){
    if (this.sameAddress){
      this.student.permAddress=this.student.corrAddress;
      this.student.permCity=this.student.corrCity;
      this.student.permState=this.student.corrState;
      this.student.permPin=this.student.corrPin;
    }else{

    }
    this.adminService.registerStudent(this.student).subscribe(res=>{
      if(res[0].response=="true"){
        this.result  ="1";
        console.log("OK");
        setTimeout(()=>{this.result = ""},1500)
      }else{
        this.result  ="0";
        console.log("NOT OK");
        setTimeout(()=>{this.result = ""},1500)
      }
    });
  }


}
