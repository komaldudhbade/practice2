import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { IndianCurrencyPipe } from './indian-currency.pipe';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { SpeedPipe } from './speed.pipe';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ObjectcompComponent } from './objectcomp/objectcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FirstpageComponent,
    SecondpageComponent,
    ThirdpageComponent,
    IndianCurrencyPipe,
    ForthpageComponent,
    SpeedPipe,
    CalculatorComponent,
    ObjectcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
