import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { AuthGuard } from "@core/guard/auth.guard";

const routes: Routes = [
   {
      path: "",
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
         {
            path: "guide",
            loadChildren: () =>
               import("./guide/guide.module").then(m => m.GuideModule)
         },
         { path: "", redirectTo: "guide", pathMatch: "full" },
         { path: "**", redirectTo: "guide", pathMatch: "full" }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DashboardRoutingModule {}
