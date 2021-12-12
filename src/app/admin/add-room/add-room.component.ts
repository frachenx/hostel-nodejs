import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  room:Room= new Room();
  result:string="";
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    
  }

  submit(){
    this.adminService.addRoom(this.room).subscribe(res=>{
      if (res[0].response="true"){
        this.result = "1";
        setTimeout(()=>{this.result=""},1500);
      }else{
        this.result = "0";
        setTimeout(()=>{this.result=""},1500);
      }
    })

  }

}
