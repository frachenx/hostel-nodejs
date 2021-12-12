import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  students:Student[];
  numRows:number;
  search:string;
  resultDelete:string="";
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getStudents().subscribe((students:Student[])=>{
      this.students = students;
    })
  }

  deleteStudent(id:number){
    this.adminService.deleteStudent(id.toString()).subscribe(res=>{
      if(res[0].response=="true"){
        this.resultDelete="1";
        setTimeout(()=>{this.resultDelete=""},1500);
        this.ngOnInit();
      }else{
        this.resultDelete="0";
        setTimeout(()=>{this.resultDelete=""},1500);
        this.ngOnInit();
      }
    })
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
