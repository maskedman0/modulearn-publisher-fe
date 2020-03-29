import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { NoAuthGuard } from "@core/guard/no-auth.guard";
import { AuthGuard } from "@core/guard/auth.guard";

const routes: Routes = [
   { path: "sign-in", component: SignInComponent, canActivate: [NoAuthGuard] },
   {
      path: "dashboard",
      loadChildren: () =>
         import("./dashboard/dashboard.module").then(m => m.DashboardModule),
      canActivate: [AuthGuard]
   },
   { path: "", redirectTo: "sign-in", pathMatch: "full" },
   { path: "**", redirectTo: "sign-in", pathMatch: "full" }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
