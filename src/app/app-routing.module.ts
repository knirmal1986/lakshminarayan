import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TodoComponent } from './todo/todo.component';
import { StudentreactivformComponent } from './studentreactivform/studentreactivform.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent ,
    children : [
      {path:'viewTaskDtls/:id', component: ContactDetailsComponent 
      },
    ]
   },
  {path:'viewTaskDtls/:id', component: ContactDetailsComponent},
  {path:'parent', component: ParentComponent},
  {path:'userForm', component: UserFormComponent},
  {path:'todo', component: TodoComponent},
  {path:'reactiveForms', component: StudentreactivformComponent},
  {path:'httpExample', component: HttpExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
