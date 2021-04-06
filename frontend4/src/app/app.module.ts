import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './games/home/home.component';
import { CreateComponent } from './games/create/create.component';
import { EditComponent } from './games/edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxBootstrapIconsModule, hammer, trash} from 'ngx-bootstrap-icons';
import { FormComponent } from './games/edit/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const icons = {
  hammer,
  trash,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
