import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit{

  public loggedIn =false;

  constructor(private route:ActivatedRoute,private ms:MainserviceService){}

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
   
  }
  id=this.route.snapshot.paramMap.get('userName');

}
