import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Room } from '../room.model';
import { Student } from '../student.model';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  id:string;
  student:Student;
  foodStatus:string;
  foodFee:number;
  totalFee:number;
  constructor(private route:ActivatedRoute,private adminService:AdminService) {
    route.params.subscribe(params=>{
      this.id = params['id'];
      this.adminService.getStudent(params['id']).subscribe((student:Student)=>{
        this.student = student;
        if(this.student.food=="1"){
          this.foodStatus = "With Food";
          this.foodFee =12000;
        }else{
          this.foodStatus = "Without Food";
          this.foodFee =0;
        }
        this.totalFee=48000 + this.foodFee + parseInt(student.room_fee)
        console.log(this.student);
      });
      // console.log(this.student);
    })
    
   }

  ngOnInit(): void {
  }

}
