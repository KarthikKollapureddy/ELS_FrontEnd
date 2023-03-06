import { Component, OnInit } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { AdminServiceService } from '../admin-service.service';
import { Grade } from '../grade';
import { MainserviceService } from '../mainservice.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-admin-subjects',
  templateUrl: './admin-subjects.component.html',
  styleUrls: ['./admin-subjects.component.css']
})
export class AdminSubjectsComponent implements OnInit{
  public loggedIn =false;
  subjects:any;
  msg ="";
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private adminservice:AdminServiceService,private router:Router,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.adminservice.getSubData().subscribe(
      data=>{
      //   var myJsonString = JSON.stringify(data);
      //   var myJsonObject = JSON.parse(myJsonString);
      //   for (let index = 0; index < myJsonObject.length - 1; index++) {
      //      var getGradName = myJsonObject[index].gradName;

      //      var obj = {};
      //      var myjsString = JSON.stringify(obj);
      //      var myObject = JSON.parse(myjsString);
      //      myObject.gradName = getGradName;
          
          
      // }
           this.subjects=data;
      
    },
      error=>{
        console.log("Not found");
        
        
      }

      

    )
   
  }
  i=0;
  id=this.route.snapshot.paramMap.get('userName');

 sub =new Subject();
 name!:string;

 add(){
  if(
    this.sub.subName === null ||
    
    this.sub.subName === undefined ||
    
    this.sub.subName === ''){
      alert("Please enter required details");
    }
  this.adminservice.addSub(this.sub).subscribe(
    data=>{
      console.log("response received....");
      this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open("Successfully added!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
    },
    error=>{
      console.log("error occured...");
      this.ngOnInit();
      this.snackBar.open("This subject already exists !!Try with adding different subject","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }

  )
}

edit(subId : number){
  if(
    this.name === null ||
    
    this.name === undefined ||
    
    this.name === ''){
      alert("Please enter required details");
    }
  this.adminservice.editSubject(subId,this.name).subscribe(
    data=>{
      console.log("response received....");
      this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open("Successfully added!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
    },
    error=>{
      console.log("error occured...");
      this.router.navigate(['adminSub',this.id]);
      this.ngOnInit();
      this.snackBar.open("This grade already exists !!Try with adding different grade","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }
    

  )
}

delete(subId : number){
  
  this.adminservice.deleteSubject(subId).subscribe(
    data=>{
      console.log("response received....");
      this.ngOnInit();
      this.snackBar.open("Successfully deleted!!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
      
    },
    error=>{
      console.log("error occured...");
      this.ngOnInit();
      this.snackBar.open("Problem occured!","X",{duration:this.durationInSeconds*1000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition})
     
      
    }
    

  )
}

}
