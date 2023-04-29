import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from '../app/login/login.component';
import { FileuploadComponent } from '../app/fileupload/fileupload.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from 'src/app/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileuploadComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
