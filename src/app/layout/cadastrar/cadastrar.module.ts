import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cadastrarComponent } from './cadastrar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { cadastrarRoutingModule } from './cadastrar-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [cadastrarComponent],
  imports: [
    CommonModule,
    cadastrarRoutingModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [cadastrarComponent]
})
export class cadastrarModule { }
