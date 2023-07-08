import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AccountsComponent } from './pages/retirement/accounts/accounts.component';
import { CashflowComponent } from './pages/retirement/cashflow/cashflow.component';
import { CongratsComponent } from './pages/retirement/congrats/congrats.component';
import { EmployerContribuitionsComponent } from './pages/retirement/employer-contribuitions/employer-contribuitions.component';
import { IndividualContribuitionsComponent } from './pages/retirement/individual-contribuitions/individual-contribuitions.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountsComponent,
    CashflowComponent,
    CongratsComponent,
    EmployerContribuitionsComponent,
    IndividualContribuitionsComponent,
    HomeComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
