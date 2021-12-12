import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { Student } from 'src/app/admin/student.model';
import { User } from '../user.model';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  id: string;
  student: Student;
  foodStatus: string;
  foodFee: number;
  totalFee: number;
  booked:boolean = false;
  sameAddress:boolean;
  user:User;
  constructor(private adminService: AdminService) {
    this.adminService.getUser(localStorage.getItem('user_id')!).subscribe((user:User)=>{
      this.user =  user;
      this.adminService.getStudentByRegNum(this.user.regNum).subscribe((student: Student) => {
        if (student.id == 0) {
        } else {
          this.booked=true;
          this.student = student;
          if (this.student.food == "1") {
            this.foodStatus = "With Food";
            this.foodFee = 12000;
          } else {
            this.foodStatus = "Without Food";
            this.foodFee = 0;
          }
          this.totalFee = 48000 + this.foodFee + parseInt(student.room_fee)
          console.log(this.student);
        }
      })
    });
    
  }
  ngOnInit(): void {
  }

}
