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
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from '@ngrx/store';
import { appProductReducer } from './Reducers/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HighlightDirective } from './HighlightDirective.directive';
import { ttToggleDirective } from './ttToggleDirective.directive';
import { reducers } from './Reducers';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    HighlightDirective,
    ttToggleDirective,
    TodoComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    ContactComponent,
    UserFormComponent,
    StudentreactivformComponent,
    HttpExampleComponent,
    ContactDetailsComponent,
    ParentViewComponent,
    ChildViewComponent,
    ProductComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'angular-test-app',
      maxAge: 25,
    }),
   
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
