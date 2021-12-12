import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Room } from '../room.model';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  id:string;
  room:Room;
  resultString:string="";
  constructor(private router:ActivatedRoute,private adminService:AdminService) {
    this.router.params.subscribe(params=>{
      this.id = params["id"];
      this.adminService.getRoom(this.id).subscribe((room:Room)=>{
        this.room  = room;
      })
    })
   }

  ngOnInit(): void {
  }

  submit(){
    this.adminService.updateRoom(this.room).subscribe(res=>{
      if(res.response=="true"){
        this.resultString ='1';
        setTimeout(()=>{this.resultString=''},1500)
      }else{
        this.resultString ='0';
        setTimeout(()=>{this.resultString=''},1500)
      }
    })
  }

}
