import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "@core/guard/auth.guard";

import { GuideListComponent } from "./guide-list/guide-list.component";
import { GuideFormComponent } from "./guide-form/guide-form.component";

const routes: Routes = [
   { path: "list", component: GuideListComponent, canActivate: [AuthGuard] },
   { path: "form", component: GuideFormComponent, canActivate: [AuthGuard] },
   { path: "", redirectTo: "form", pathMatch: "full" },
   { path: "**", redirectTo: "form", pathMatch: "full" }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class GuideRoutingModule {}
