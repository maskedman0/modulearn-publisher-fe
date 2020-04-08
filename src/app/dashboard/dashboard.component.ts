import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
   selector: "app-dashboard",
   template: `
      <div class="wrapper">
         <app-navbar></app-navbar>
         <app-sidebar></app-sidebar>
         <div class="content-wrapper">
            <router-outlet></router-outlet>
         </div>
         <app-footer></app-footer>
      </div>
   `,
   styles: [``]
})
export class DashboardComponent implements OnInit {
   constructor(private title: Title) {}

   ngOnInit(): void {
      this.title.setTitle("Dashboard | Modulearn: Publishers.");
      this.stylingInit();
   }

   stylingInit(): void {
      const body = document.getElementsByTagName("body")[0];
      body.classList.remove("login-page");
      body.classList.add("sidebar-mini");
      body.classList.add("layout-fixed");
      body.classList.add("layout-navbar-fixed");
      body.classList.add("sidebar-collapse");
   }
}
