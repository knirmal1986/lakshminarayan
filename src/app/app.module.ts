import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CapitalizePipe } from './CapitalizePipe.pipe';
import { TodoComponent } from './todo/todo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentreactivformComponent } from './studentreactivform/studentreactivform.component';
import { HttpExampleComponent } from './http-example/http-example.component';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ContactComponent,
    UserFormComponent,
    StudentreactivformComponent,
    HttpExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
