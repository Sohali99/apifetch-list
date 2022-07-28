import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ListFormComponent } from './component/list-form/list-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    CreatePageComponent,
    ViewPageComponent,
    EditPageComponent,
    ListFormComponent,
    ListFormComponent
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
