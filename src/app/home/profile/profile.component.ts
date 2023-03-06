import { Component } from '@angular/core';
import { MainserviceService } from 'src/app/mainservice.service';
import { RegisterUser } from 'src/model/RegisterUser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private service:MainserviceService){

  }
  userName:any=localStorage.getItem("uname");
  unixTimestamp:any;
  // dob = 1654540200000;
  role= '';
  bDay:any;
  num = 0;
  user:RegisterUser=new RegisterUser;
  ngOnInit(): void {
   this.userName=localStorage.getItem("uname");
   this.getUsr();
  }
 
  getUsr(){
    this.service.getUser(this.userName).subscribe(
      data=>{
        this.user=data;
        if(data['role']==2){
this.role="Trainer"
        }
        if(data['role']==3){
this.role="Student"
        }
        
        this.unixTimestamp=data['dob']

        this.num= this.unixTimestamp;
        let date = new Date(this.num);
        this.bDay = date.toLocaleDateString("en-US");
        
        
        

        
        this.user=data;
      }
    )
  }
}
