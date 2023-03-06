import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/model/RegisterUser.model';
import { Login } from './login';
import { RegUser } from './reg-user';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  
  public editPassword(npwd:string,userName:string):Observable<any>{
    let url=this.baseUrl+'change/'+userName;
    return this.http.put(url,npwd);
  }
  

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  private baseUrl='http://localhost:8098/elearning/api/';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  login(log:Login):Observable<any>{
    let url=this.baseUrl+'login';
    return this.http.post(url,log);


  }
  public loginUserFromRemote(log:Login):Observable<any>{
    localStorage.setItem("username",log.userName);
    let url=this.baseUrl+'login';
    return this.http.post(url,log);



  }

  public getUserData(userName: string) :Observable<any> {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set('Authorization',"Bearer "+token);
    let url="http://localhost:9090/elearning/api/"+userName;
    
    // return this.http.get(url);
    return this.http.get(url,{headers});

  }

  public getInterest(userId: number) :Observable<any> {
    let url=this.baseUrl+'interest/'+userId;
    return this.http.get(url);

  }
  logUser(token : any){
    localStorage.setItem("token",token);
    return true;
  }
  public registerUserFromRemote(reg:RegUser):Observable<any>{
    let url=this.baseUrl+'signup';
    return this.http.post(url,reg);
  }

  getToken(){
    return localStorage.getItem("token")
  }
  
  isLoggedIn(){
    let token = localStorage.getItem("token");
  if(token==undefined || token === '' || token == null){
    return false;
  }
  else{
    return true;
  }
  }

  getUser(userName:any){
    return this.http.get<RegisterUser>(`http://localhost:9090/elearning/api/na/`+userName);
  }

}
