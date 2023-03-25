import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { AddNewHouseComponent } from './components/add-new-house/add-new-house.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateHomeDetailsComponent } from './components/update-home-details/update-home-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : HomeComponent},
  {path:'addNewHome', component : AddNewHouseComponent},
  {path:'addNewAgent', component : AddAgentComponent},
  {path: 'updateHome', component: UpdateHomeDetailsComponent},
  {path:'updateHomeDetails', component : AddNewHouseComponent},
  {path:'advanced-search', component : AdvancedSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
