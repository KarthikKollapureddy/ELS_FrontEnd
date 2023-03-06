import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-trainer-home',
  templateUrl: './trainer-home.component.html',
  styleUrls: ['./trainer-home.component.css']
})
export class TrainerHomeComponent implements OnInit{
  public loggedIn =false;
  public id:any;
  msg='';

  constructor(private route:ActivatedRoute,private ms:MainserviceService,private fb: FormBuilder){
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
    this.id=this.route.snapshot.paramMap.get('userId');
    this.ms.getInterest(this.id).subscribe(

      data=>{
        //  this.msg=data;
        
        console.log(data);
      },
      error=>{
         console.log(error);
      }
      

    )
  }
  


  form: FormGroup;
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' },
  ];
  
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  submitForm() {
    console.log(this.form.value);
  }

}
