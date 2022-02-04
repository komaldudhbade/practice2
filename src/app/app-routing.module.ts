import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ForthpageComponent } from './forthpage/forthpage.component';
import { ObjectcompComponent } from './objectcomp/objectcomp.component';
import { PipepracticeComponent } from './pipepractice/pipepractice.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

const routes: Routes = [
  {
    path: 'firstpage',
    component: FirstpageComponent,
  },
  {
    path: 'secondpage',
    component: SecondpageComponent,
  },
  {
    path: 'thirdpage',
    component: ThirdpageComponent,
  },
  {
    path: 'forthpage',
    component: ForthpageComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'objectcomp',
    component: ObjectcompComponent,
  },
  {
    path:'pipepractice',component:PipepracticeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
