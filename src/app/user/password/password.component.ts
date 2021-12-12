import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { User } from '../user.model';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  oldPassword:string;
  newPassword:string;
  confirmPassword:string;
  user:User;
  resultString:string="";
  constructor(private adminService:AdminService) {

   }

  ngOnInit(): void {
    this.adminService.getUser(localStorage.getItem('user_id')!).subscribe((user:User)=>{
      this.user =  user;
    })
  }

  submit(){
    if (this.newPassword!=this.confirmPassword || this.resultString=='3'){
      this.resultString = "2";
      setTimeout(()=>{this.resultString=""},1500);
    }else{
      this.user.password = this.newPassword;
      this.adminService.updateUser(this.user).subscribe(res=>{
        if (res.response ="true"){
          this.resultString = "1";
          setTimeout(()=>{this.resultString=""},1500);
        }else{
          this.resultString = "0";
        setTimeout(()=>{this.resultString=""},1500);
        }
      });
    }
  }

  checkOldPassword(){
    this.adminService.checkUserPassword({
      "id" : localStorage.getItem('user_id'),
      "password" : this.oldPassword
    }).subscribe(res=>{
      console.log(res);
      if (res.response=="false"){
        this.resultString = '3';
        // setTimeout(()=>{this.resultString=""},1500);
      }else{
        // this.resultString = '3';
        // setTimeout(()=>{this.resultString="",1500});
      }
    })
  } 
}
