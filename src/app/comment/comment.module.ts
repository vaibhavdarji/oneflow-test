import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CommentComponent} from './comment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [
    CommentComponent
  ],
  exports: [CommentComponent]
})
export class CommentModule {}
