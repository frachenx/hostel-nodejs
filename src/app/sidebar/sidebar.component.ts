import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from '../main/main.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItemsVar:string;
  constructor(private router:Router,private mainService:MainService) { 
    this.mainService.isUserLoggedIn.subscribe(res=>{
      this.sidebarItemsVar = res;
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem("user_type")===null){
      this.sidebarItemsVar="0";
    }else{
      switch (localStorage.getItem("user_type")){
        case "ADMIN":this.sidebarItemsVar="1";break;
        case "USER": this.sidebarItemsVar="2";break;
      }
    }
  }

}
