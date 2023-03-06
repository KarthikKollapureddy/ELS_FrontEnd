import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminGradesComponent } from './admin-grades/admin-grades.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AuthServiceService } from './auth-service.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TrainerHomeComponent } from './trainer-home/trainer-home.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
    },
    {
      path:'login',
      component:LoginRegisterComponent,
      pathMatch:'full'
    },
    {
      path:'profile',
      component:ProfileComponent,
      pathMatch:'full'
    },
    {
      path:'register',
      component:RegisterComponent,
      pathMatch:'full'
    },

    {
      path:'admin/:userId',
      component:AdminHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminGrad/:userId',
      component:AdminGradesComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'trainer/:userId',
      component:TrainerHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'student/:userId',
      component:StudentHomeComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'reset/:userId',
      component:ChangePasswordComponent,canActivate:[AuthServiceService]
      
    },
    {
      path:'adminSub/:userId',
      component:AdminSubjectsComponent,canActivate:[AuthServiceService]
      
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
