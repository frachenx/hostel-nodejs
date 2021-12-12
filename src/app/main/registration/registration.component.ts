import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  confirmPassword:string;
  user:User=new User();
  constructor(private mainService:MainService) { }

  ngOnInit(): void {

  }

  submit(){
    this.mainService.registerUser(this.user).subscribe(res=>{
      if(res.response==true){
        let myForm = document.getElementById('myForm') as HTMLFormElement
        myForm.reset();
      }
    });
  }

}
