import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from './login-user';
import { RegisterUser } from './register-user';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterService {

  constructor(private http:HttpClient) { }

  

  registerUser(user: RegisterUser):Observable<any>{
    // return this.http.post<RegisterUser>("http://localhost:8098/elearning/api/signup",user);
    return this.http.post<RegisterUser>("http://localhost:9090/elearning/api/na/signup",user);
    // return this.http.post<RegisterUser>("http://localhost:8098/elearning/api/register",user);
  }
  login(user: LoginUser):Observable<any>{
    return this.http.post("http://localhost:9090/elearning/api/na/login",user);
    // return this.http.post("http://localhost:8098/elearning/api/login",user);
  }
}
