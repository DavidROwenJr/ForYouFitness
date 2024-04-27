import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { AboutMeComponent } from './public/pages/about-me/about-me.component';
import { OfferingsComponent } from './public/pages/offerings/offerings.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { LoginComponent } from './public/pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutMeComponent,
  },
  {
    path: 'offerings',
    component: OfferingsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
