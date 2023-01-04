import { Chain } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BleachComponent } from './pages/bleach/bleach.component';
import { ChainsawComponent } from './pages/chainsaw/chainsaw.component';
import { DonarComponent } from './pages/donar/donar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OtroComponent } from './pages/otro/otro.component';
import { SNKComponent } from './pages/snk/snk.component';
import { YesComponent } from './pages/yes/yes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'donar',
  },
  {
    path: 'Bleach',
    component: BleachComponent,
  },
  {
    path: 'SNK',
    component: SNKComponent,
  },
  {
    path: 'chainsaw',
    component: ChainsawComponent,
  },
  {
    path: 'donar',
    component: DonarComponent,
  },
  {
    path: 'otro',
    component: OtroComponent,
  },
  {
    path: 'yes',
    component: YesComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
