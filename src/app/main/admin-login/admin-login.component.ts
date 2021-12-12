import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/admin/admin-login.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:AdminLogin= new AdminLogin();
  constructor(private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.mainService.adminLogin(this.admin).subscribe(res=>{
      console.log(res);
      console.log(res.length);
      console.log(res[0]);
      console.log(res[0].id);

      if(res[0].response=="true"){
        localStorage.setItem('user_type',"ADMIN");
        localStorage.removeItem('user_id')
        this.router.navigate(["/dashboard"])
        this.mainService.isUserLoggedIn.next("1");
        // window.location.reload()
      }else{
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_id')
        this.router.navigate(["/admin-login"])
        this.mainService.isUserLoggedIn.next("0");
      }

      console.log(localStorage.getItem('user_type'))
      console.log(localStorage.getItem('user_id'))
      
    })
  }



}
