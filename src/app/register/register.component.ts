import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { RegUser } from '../reg-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reg =new RegUser();
  msg='';
  constructor(private mainservice:MainserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  RegisterUser(){
    if(
      this.reg.firstName === null ||
      this.reg.lastName === null ||
      this.reg.userName === null ||
      this.reg.pass === null ||
      this.reg.firstName === undefined ||
      this.reg.lastName === undefined ||
      this.reg.userName === undefined ||
      this.reg.pass === undefined ||
      this.reg.firstName === '' ||
      this.reg.lastName === '' ||
      this.reg.userName === '' ||
      this.reg.pass === ''){
        alert("Please enter required details");
      }
    this.mainservice.registerUserFromRemote(this.reg).subscribe(
      data=>{
        console.log("response received....");
        this.router.navigate(['/login']);
      },
      error=>{
        console.log("error occured...");
        this.msg="This user already exists...";
      }

    )
  }

}
