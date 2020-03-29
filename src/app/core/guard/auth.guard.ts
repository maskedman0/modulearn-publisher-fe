import { Injectable } from "@angular/core";
import {
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot
} from "@angular/router";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "@core/auth/auth.service";
import { StorageService } from "@shared/service/storage.service";

@Injectable()
export class AuthGuard implements CanActivate {
   constructor(
      private router: Router,
      private authService: AuthService,
      private storageService: StorageService
   ) {}

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.storageService.token;

      if (token) {
         const parsedJwt = this.authService.parseJwt(token);
         if (parsedJwt.exp) {
            if (new Date() > new Date(parsedJwt.exp * 1000)) {
               this.router.navigate(["/sign-in"], {
                  queryParams: { returnUrl: state.url }
               });
               return false;
            }
            return true;
         }
      }

      this.router.navigate(["/sign-in"], {
         queryParams: { returnUrl: state.url }
      });
      return false;
   }
}
