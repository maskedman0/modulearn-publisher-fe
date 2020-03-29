import {
   HttpEvent,
   HttpInterceptor,
   HttpHandler,
   HttpRequest,
   HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AppErrorInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(
      request: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
         catchError((error: HttpErrorResponse) => {
            let errorMessage = "";

            if (error.error instanceof ErrorEvent) {
               /** Client-side errors */
               errorMessage = error.error.message;
            } else {
               /** Server-thrown errors */
               if (error.status === 401) {
                  window.alert("Email or password is incorrect.");
               } else {
                  console.log(error);
                  errorMessage = `${error.error.message}`;
                  window.alert(errorMessage);
               }
            }
            return throwError(errorMessage);
         })
      );
   }
}
