import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course:Course= new Course();
  savedCorrectly:string=""
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  submit(){
    this.adminService.addCourse(this.course).subscribe(res=>{
      console.log(res);
      if (res[0].response=="true"){
        this.savedCorrectly="1";
        setTimeout(
          ()=>{
            this.savedCorrectly="";
          },2000
        )
      }else{
        this.savedCorrectly="0";
        setTimeout(()=>{this.savedCorrectly=""},2000)
      }
    });
  }
}
