import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  ButtonsModule,
  CarouselModule,
  MDBBootstrapModule,
  WavesModule
} from 'angular-bootstrap-md';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { MedicalComponent } from './components/events/annual/medical/medical.component';
import { ConcertComponent } from './components/events/annual/concert/concert.component';
import { VesakComponent } from './components/events/annual/vesak/vesak.component';
import { TripComponent } from './components/events/annual/trip/trip.component';
import { MeetupComponent } from './components/events/annual/meetup/meetup.component';
import { BathComponent } from './components/events/daily/bath/bath.component';
import { TreatComponent } from './components/events/daily/treat/treat.component';
import { EntertainComponent } from './components/events/daily/entertain/entertain.component';
import { DonationComponent } from './components/events/daily/donation/donation.component';
import { OtherComponent } from './components/events/daily/other/other.component';
import { HeaderComponent } from './components/events/share/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    MedicalComponent,
    ConcertComponent,
    VesakComponent,
    TripComponent,
    MeetupComponent,
    BathComponent,
    TreatComponent,
    EntertainComponent,
    DonationComponent,
    OtherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,

    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    ButtonsModule,
    MatButtonModule
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule {}
