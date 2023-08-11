import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  exports: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PortfolioModule { }
