import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user_type:string;
  constructor() {
    if(localStorage.getItem("user_type")===null){
      this.user_type="0";
    }else{
      switch (localStorage.getItem("user_type")){
        case "ADMIN":this.user_type="1";break;
        case "USER": this.user_type="2";break;
      }
    }
  }

  ngOnInit(): void {
  }

}
