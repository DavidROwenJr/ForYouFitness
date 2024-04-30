import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AboutMeComponent } from './public/pages/about-me/about-me.component';
import { OfferingsComponent } from './public/pages/offerings/offerings.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './public/pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SlideShowComponent } from './public/components/slide-show/slide-show.component';
import { UserProfileComponent } from './public/pages/user-profile/user-profile.component';
import { UserCardComponent } from './public/components/user-card/user-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ExecutiveProfileComponent } from './public/components/executive-profile/executive-profile.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BaseballCardComponent } from './public/components/baseball-card/baseball-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    OfferingsComponent,
    ContactComponent,
    LoginComponent,
    SlideShowComponent,
    UserProfileComponent,
    UserCardComponent,
    ExecutiveProfileComponent,
    BaseballCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
