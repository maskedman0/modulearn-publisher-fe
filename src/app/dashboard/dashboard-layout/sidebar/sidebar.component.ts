import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-sidebar",
   templateUrl: "./sidebar.component.html",
   styles: [
      `
         li.nav-item.has-treeview.menu-open > a {
            background-color: #007bff !important;
            color: #fff !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
               0 1px 2px rgba(0, 0, 0, 0.24);
         }
      `
   ]
})
export class SidebarComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
