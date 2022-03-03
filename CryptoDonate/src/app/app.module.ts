import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ServicesComponent } from './Components/services/services.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ServiceCardComponent } from './Components/service-card/service-card.component';
import { PriceComponent } from './Components/price/price.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { TransactionsCardComponent } from './Components/transactions-card/transactions-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeComponent,
    ServicesComponent,
    TransactionsComponent,
    FooterComponent,
    ServiceCardComponent,
    PriceComponent,
    CustomersComponent,
    TransactionsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
