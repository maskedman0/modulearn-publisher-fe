import { Injectable } from "@angular/core";
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "@shared/service/storage.service";
import { AuthService } from "@core/auth/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
   constructor(
      private storageService: StorageService,
      private authService: AuthService
   ) {}

   intercept(
      request: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      const token = this.storageService.token;

      if (token) {
         const parsedJwt = this.authService.parseJwt(token);

         if (parsedJwt && parsedJwt.exp) {
            if (new Date() < new Date(parsedJwt.exp * 1000)) {
               request = request.clone({
                  setHeaders: { Authorization: `Bearer ${token}` }
               });
            }
         }
      }

      return next.handle(request);
   }
}
