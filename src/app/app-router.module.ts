import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonsComponent } from './sales/pages/commons/commons.component';
import { NotCommonsComponent } from './sales/pages/not-commons/not-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: CommonsComponent,
    pathMatch: 'full',
  },
  {
    path: 'not-commons',
    component: NotCommonsComponent,
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouterModule {}
