import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangepassRoutingModule } from './change-pass-routing.module';
import { ChangePassComponent } from './change-pass.component';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ChangePassComponent],
  imports: [
    CommonModule,
    ChangepassRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ChangePassModule { }
