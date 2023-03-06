import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Grade } from './grade';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  
  

  private baseUrl='http://localhost:9098/elearning/api/admin';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  public getGradData(userName: string) :Observable<any> {
    let url=this.baseUrl+'/getGrades/'+userName;
    return this.http.get(url);

  }
  public getData()  : Observable<any>{
    let url=this.baseUrl+'/getInfo';
    return this.http.get(url);
  }

  public addGrade(grad:Grade,userName:string):Observable<any>{
    let url=this.baseUrl+'/addGrades/'+userName;
    return this.http.post(url,grad);
  }
  deleteGrade(gradId: number, userName: string) : Observable<any>{
    let url=this.baseUrl+'/deleteGrad/'+userName+'/'+gradId;
    return this.http.delete(url);
  }
  editGrade(gradId: number,gradName : string,userName: string):Observable<any> {
    let url=this.baseUrl+'/editGrad/'+userName+'/'+gradId;
    return this.http.patch(url,gradName);
    
  }
   


  deleteSubject(subId: number) {
    let url=this.baseUrl+'/deleteSub/'+subId;
    return this.http.delete(url);
  }
  editSubject(subId: number,subName : string):Observable<any> {
    let url=this.baseUrl+'/editSub/'+subId;
    return this.http.patch(url,subName);
    
  }

  

  public getSubData() :Observable<any> {
    let url=this.baseUrl+'/getSubjects';
    return this.http.get(url);

  }

  public addSub(sub:Subject):Observable<any>{
    let url=this.baseUrl+'/addSubject';
    return this.http.post(url,sub);
  }

}
