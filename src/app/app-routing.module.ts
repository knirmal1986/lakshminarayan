import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TodoComponent } from './todo/todo.component';
import { StudentreactivformComponent } from './studentreactivform/studentreactivform.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ProductComponent } from './product/product.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent, canActivate:[]},
  {path:'contact', component: ContactComponent ,
    children : [
      {path:'viewTaskDtls/:id', component: ContactDetailsComponent 
      },
    ]
   },
  {path:'viewTaskDtls/:id', component: ContactDetailsComponent},
  {path:'parent', component: ParentViewComponent},
  {path:'userForm', component: UserFormComponent},
  {path:'todo', component: TodoComponent},
  {path:'reactiveForms', component: StudentreactivformComponent},
  {path:'httpExample', component: HttpExampleComponent},
  {path:'product', component: ProductComponent},
  {path:'forbidden', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
