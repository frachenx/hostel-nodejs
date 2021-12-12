import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { UserLogin } from '../user/user-login.model';
import { AdminLogin } from '../admin/admin-login.model';
import { environment } from 'src/environments/environment';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl=environment.baseUrl;
  public isUserLoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>("");
  admin:AdminLogin;
  constructor(private http:HttpClient) {

  }

  userLogin(user:UserLogin){
    return this.http.post<any>(`${this.baseUrl}user-login`,user);
  }
  
  adminLogin(admin:AdminLogin){
    return this.http.post<any>(`${this.baseUrl}admin-login`,admin)
  }

  registerUser(user:User){
    return this.http.post<any>(`${this.baseUrl}user-registration`,user);
  }
}
