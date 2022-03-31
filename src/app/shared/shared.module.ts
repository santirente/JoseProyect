import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalPlayerComponent } from './modal-player/modal-player.component';


@NgModule({
  declarations: [
    ModalPlayerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
})
export class SharedModule { }
