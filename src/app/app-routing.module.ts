import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { DisplayHide } from './display-hide/display-hide.component';
import { CommunicationComponent } from './communication/communication.component';
import { CrudComponent } from './crud/crud.component';
import { CounterAppComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'display-hide',
    component: DisplayHide,
  },
  {
    path: 'communication',
    component: CommunicationComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
  {
    path: 'counter',
    component: CounterAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
