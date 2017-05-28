import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ContractModule } from './contract/contract.module';
import {CommentModule} from './comment/comment.module';

@NgModule({
  imports:      [ BrowserModule, ContractModule, CommentModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
