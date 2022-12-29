import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientEntryComponent } from './patient-entry/patient-entry.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientdeleteComponent } from './patientdelete/patientdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientEntryComponent,
    PatientSearchComponent,
    PatientdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
