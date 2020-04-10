import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { SharedModule } from '@shared/shared.module';
import { GuideRoutingModule } from "./guide-routing.module";
import { GuideListComponent } from "./guide-list/guide-list.component";
import { GuideFormComponent } from "./guide-form/guide-form.component";
import { MediaFormComponent } from './media-form/media-form.component';
import { GuideStepFormComponent } from './guide-form/guide-step-form/guide-step-form.component';

@NgModule({
   declarations: [
      GuideListComponent,
      GuideFormComponent,
      MediaFormComponent,
      GuideStepFormComponent
   ],
   imports: [
      CommonModule,
      GuideRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,

      SharedModule,

      DropdownModule,
      InputTextModule,
      ProgressSpinnerModule,
   ]
})
export class GuideModule {}
