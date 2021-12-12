import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private mainService:MainService) { }

  ngOnInit(): void {
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_id");
    this.route.navigate(["user-login"]);
    this.mainService.isUserLoggedIn.next("0");
    // window.location.reload();
  }

}
