import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoClientRoutingModule } from './info-client-routing.module';
import { InfoClientComponent } from './info-client.component';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbInputModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTooltipModule
} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [InfoClientComponent],
  imports: [
    CommonModule,
    InfoClientRoutingModule,
    NbButtonModule,
    NbInputModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    NbCardModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTooltipModule
  ]
})
export class InfoClientModule { }
