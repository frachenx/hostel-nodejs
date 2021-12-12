import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { User } from '../user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user:User=new User();
  resultUpdate:string = "";
  constructor(private adminService:AdminService) {
    this.adminService.getUser(localStorage.getItem('user_id')!).subscribe(
      (user:User)=>{
        this.user = user;
      }
    );

  }

  ngOnInit(): void {
  }

  submit(){
    this.adminService.updateUser(this.user).subscribe(res=>{
      if(res[0].response=="true"){
        this.resultUpdate = "1"
        setTimeout(()=>{
          this.resultUpdate =""
        },1500);
      }else{
        this.resultUpdate = "0"
        setTimeout(()=>{
          this.resultUpdate =""
        },1500);
      }
    })
  }
}
