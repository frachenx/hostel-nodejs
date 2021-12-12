import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Course } from '../course.model';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  id:string;
  course:Course;
  result:string="";
  resultDelete:string="";

  constructor(private route:ActivatedRoute,private adminService:AdminService) {
    route.params.subscribe(params=>{
      this.id = params['id'];
      this.adminService.getCourse(params['id']).subscribe((courses:Course[])=>{
        this.course = courses[0];
      })
    });
    
   }

  ngOnInit(): void {
  }

  submit(){
    this.adminService.updateCourse(this.course).subscribe(res=>{
      if(res[0].response=="true"){
        this.result = "1";
        setTimeout(()=>{this.result=""},2000);
      }else{
        this.result = "0";
        setTimeout(()=>{this.result=""},2000);
      }
    });
  }

  
}
