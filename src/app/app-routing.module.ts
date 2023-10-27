import { SalesOverviewComponent } from './sales-overview/sales-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarvestiveComponent } from './harvestive/harvestive.component';

const routes: Routes = [
  {path:'sales',component:SalesOverviewComponent},
  {path:'harvestive',component:HarvestiveComponent},
  // {path:'new',component:AboutUSIComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
