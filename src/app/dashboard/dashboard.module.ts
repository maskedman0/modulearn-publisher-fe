import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardLayoutModule } from "./dashboard-layout/dashboard-layout.module";

@NgModule({
   declarations: [DashboardComponent],
   imports: [CommonModule, DashboardRoutingModule, DashboardLayoutModule]
})
export class DashboardModule {}
