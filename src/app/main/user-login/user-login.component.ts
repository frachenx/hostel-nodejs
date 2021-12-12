import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/user/user-login.model';
import { User } from 'src/app/user/user.model';
import { MainService } from '../main.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:UserLogin=new UserLogin()

  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.mainService.userLogin(this.user).subscribe(res=>{
      console.log(res);
      console.log(res[0]);
      console.log(res[0].id);

      if(res[0].response=="true"){
        localStorage.setItem('user_type',"USER");
        localStorage.setItem('user_id',res[0].id)
        this.router.navigate(["/dashboard"])
        this.mainService.isUserLoggedIn.next("2");
        // window.location.reload()
      }else{
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_id')
        this.router.navigate(["/user-login"])
        this.mainService.isUserLoggedIn.next("0");
      }
      console.log(localStorage.getItem('user_type'))
      console.log(localStorage.getItem('user_id'))
    })
  }

}
