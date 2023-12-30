import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountiresModule } from './countries/countires.module';

const routes: Routes = [
  {path: 'selector',
  loadChildren:  () => import('./countries/countires.module').then( m  => CountiresModule) },
  {
    path:'**',
    redirectTo: 'selector',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
