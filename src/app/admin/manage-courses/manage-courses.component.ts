import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-manage-courses',
  templateUrl: './manage-courses.component.html',
  styleUrls: ['./manage-courses.component.css']
})
export class ManageCoursesComponent implements OnInit {
  courses:Course[];
  resultDelete:string = "";
  numRows:number;
  search:string;

  constructor(private adminService:AdminService) {

   }

  ngOnInit(): void {
    this.adminService.getCourses().subscribe((courses:Course[])=>{
      this.courses = courses;
    })
  }

  deleteCourse(id:number){
    this.adminService.deleteCourse(id).subscribe(
      res=>{
        if (res[0].response == "true"){
          this.resultDelete = "1";
          setTimeout(()=>{
            this.resultDelete=""
          },1500)
        }else{
          this.resultDelete = "0";
          setTimeout(()=>{
            this.resultDelete=""
          },1500)
        }
        this.ngOnInit();
      }
    )
  }

  numEntries(){
    let table:HTMLTableElement = document.getElementById("myTable") as HTMLTableElement;
    let row:HTMLTableRowElement =table.rows[0] as HTMLTableRowElement
    for( let i=1; i<table.rows.length; i++){
      let row:HTMLTableRowElement =table.rows[i] as HTMLTableRowElement
      row.style.display="";
      if(i>this.numRows){
        row.style.display="none";
      }
    }
  }

  searchEntries(){
    let table:HTMLTableElement = document.getElementById("myTable") as HTMLTableElement
    for (let i=1;i<table.rows.length;i++){
      let row:HTMLTableRowElement =table.rows[i] as HTMLTableRowElement
      row.style.display="";
      console.log()
      if(this.search != row.children[2].innerHTML && this.search!=""){
        row.style.display="none";
      }
    }
  }


}
