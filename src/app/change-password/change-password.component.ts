import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  nuser:any;
  user:any;
   pass!:string;
   npwd!:string;
   msg='';
   cpwd!:string;
  constructor(private mainservice:MainserviceService,private route:ActivatedRoute,private router:Router) { }

  id=this.route.snapshot.paramMap.get('userName');
  ngOnInit(): void {
    let resp=this.mainservice.getUserData(this.id!);
    resp.subscribe((data)=>this.user=data);
  }

  editPwd(){
    if(this.pass == null || this.npwd == null || this.cpwd == null || this.pass == undefined || this.npwd == undefined || this.cpwd == undefined || this.pass=="" ||this.npwd == "" || this.cpwd == "" ){
      alert("Please fill the details");
    }
    
      if(this.user.pass == this.pass){
        
        if(this.npwd==this.cpwd){
        let res=this.mainservice.editPassword(this.npwd,this.id!);
        res.subscribe((data)=>this.nuser=data);
        if(this.nuser.role == 1){
        this.router.navigate(['admin/',this.id]);
        }
        if(this.nuser.role == 2){
          this.router.navigate(['trainer/',this.id]);
        }
          if(this.nuser.role == 3){
            this.router.navigate(['student/',this.id]);
            }
        }
        else{
          alert("Your new password does not match with confirm password!!!")
        }
      }
      else{
        console.log("exception occured...");
        this.msg="Please enter correct password...";
      }
    
  }
}
