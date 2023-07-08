import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowComponent } from './pages/retirement/flow/flow.component';
import { AccountsComponent } from './pages/retirement/accounts/accounts.component';
import { IndividualContribuitionsComponent } from './pages/retirement/individual-contribuitions/individual-contribuitions.component';
import { CashflowComponent } from './pages/retirement/cashflow/cashflow.component';
import { EmployerContribuitionsComponent } from './pages/retirement/employer-contribuitions/employer-contribuitions.component';
import { CongratsComponent } from './pages/retirement/congrats/congrats.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'retirement',
    children: [
      {
        path: '',
        component: FlowComponent,
      },
      {
        path: 'accounts',
        component: AccountsComponent,
      },
      {
        path: 'individual-contributions',
        component: IndividualContribuitionsComponent,
      },
      {
        path: 'employer-contributions',
        component: EmployerContribuitionsComponent,
      },
      {
        path: 'cashflow',
        component: CashflowComponent,
      },
      {
        path: 'congratulations',
        component: CongratsComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
