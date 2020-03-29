import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { GuideRoutingModule } from "./guide-routing.module";
import { GuideListComponent } from "./guide-list/guide-list.component";
import { GuideFormComponent } from "./guide-form/guide-form.component";

@NgModule({
   declarations: [GuideListComponent, GuideFormComponent],
   imports: [
      CommonModule,
      GuideRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
   ]
})
export class GuideModule {}
