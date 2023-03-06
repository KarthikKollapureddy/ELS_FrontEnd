import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log=new Login();
   msg='';
   user:any;
   
  
  
 
  constructor(private mainservice:MainserviceService,private route:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  form=new FormGroup({
    username:new FormControl('', Validators.required),
    pwd : new FormControl('',Validators.required)
  });

  
  loginUser(){
    if(
    this.log.userName === null ||
    this.log.pass === null ||
    this.log.userName === undefined ||
    this.log.pass === undefined ||
    this.log.userName === '' ||
    this.log.pass === ''){
      alert("Please enter required details");
    }
    else{
    this.mainservice.loginUserFromRemote(this.log).subscribe(
      data=>{
        
        console.log("response received....");
        this.mainservice.logUser(data.token);
        this.mainservice.getUserData(this.log.userName).subscribe(
          data=>{
            if(data.role==1){
              this.router.navigate(['/admin',this.log.userName]);
            }
           if(data.role==2){
              this.router.navigate(['/trainer',this.log.userName]);
            }
            if(data.role == 3){
              this.router.navigate(['/student',this.log.userName]);
            }

          }
        )
        


      },
      error=>{
        console.log("exception occured...");
        this.msg="Bad Credentials...";
      }
    )
  }
}



  
  
 
  

}
