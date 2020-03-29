import { Injectable } from "@angular/core";
import {
   ActivatedRouteSnapshot,
   CanActivate,
   Router,
   RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "@shared/service/storage.service";
import { AuthService } from "@core/auth/auth.service";

@Injectable()
export class NoAuthGuard implements CanActivate {
   constructor(
      private router: Router,
      private storageService: StorageService,
      private authService: AuthService
   ) {}

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.storageService.token;

      if (token) {
         const parsedJwt = this.authService.parseJwt(token);

         if (parsedJwt.exp) {
            if (new Date() < new Date(parsedJwt.exp * 1000)) {
               this.router.navigate(["/dashboard"]);
               return false;
            }
            return true;
         }
         return true;
      } else {
         return true;
      }
   }
}
