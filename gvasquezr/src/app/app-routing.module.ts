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

const routes: Routes = [
  {path: '',          component: IndexComponent},
  {path: 'menu',      component: MenuComponent},
  {path: 'home',      component: HomeComponent},
  {path: 'carousel',  component: CarouselComponent},
  {path: 'history',   component: HistoryComponent},
  {path: 'characters',component: CharactersComponent},
  {path: 'contact',   component: ContactComponent},
  {path: 'footer',    component: FooterComponent},
  {path: 'login',     component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
