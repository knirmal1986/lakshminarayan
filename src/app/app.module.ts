import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json-service';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './CapitalizePipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
