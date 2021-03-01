import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HistoryComponent } from './components/history/history.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guargs/auth.guard';

const routes: Routes = [
  { path: '',          component: IndexComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'menu',      component: MenuComponent,       canActivate:[AuthGuard] },
  { path: 'home',      component: HomeComponent,       canActivate:[AuthGuard] },
  { path: 'carousel',  component: CarouselComponent,   canActivate:[AuthGuard] },
  { path: 'history',   component: HistoryComponent,    canActivate:[AuthGuard] },
  { path: 'characters',component: CharactersComponent, canActivate:[AuthGuard] },
  { path: 'contact',   component: ContactComponent,    canActivate:[AuthGuard] },
  { path: 'footer',    component: FooterComponent,     canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent,  canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
