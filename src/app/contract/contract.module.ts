import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContractComponent } from './contract.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [
    ContractComponent
  ],
  exports: [ContractComponent]
})
export class ContractModule {}
