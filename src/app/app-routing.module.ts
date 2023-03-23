import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : HomeComponent},
  {path:'addNewHome', component : AddNewHouseComponent},
  {path:'addNewAgent', component : AddAgentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
