import { Component, OnInit } from "@angular/core";
import { StorageService } from "@shared/service/storage.service";

@Component({
   selector: "app-navbar",
   templateUrl: "./navbar.component.html",
   styles: [
      `
         a.nav-link {
            cursor: pointer;
         }
      `
   ]
})
export class NavbarComponent implements OnInit {
   constructor(private storageService: StorageService) {}

   logout() {
      this.storageService.removeAll();
      location.reload();
   }

   ngOnInit(): void {}
}
