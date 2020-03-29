import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthService } from "./auth/auth.service";
import { NoAuthGuard } from "./guard/no-auth.guard";
import { AuthGuard } from "./guard/auth.guard";
import { HttpLoadingInterceptor } from "./interceptor/http-loading.interceptor";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";

@NgModule({
   declarations: [],
   imports: [CommonModule, HttpClientModule],
   providers: [
      AuthService,
      NoAuthGuard,
      AuthGuard,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: HttpLoadingInterceptor,
         multi: true
      },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
   ]
})
export class CoreModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: CoreModule,
         providers: [
            [
               AuthService,
               NoAuthGuard,
               AuthGuard,
               {
                  provide: HTTP_INTERCEPTORS,
                  useClass: HttpLoadingInterceptor,
                  multi: true
               },
               {
                  provide: HTTP_INTERCEPTORS,
                  useClass: JwtInterceptor,
                  multi: true
               }
            ]
         ]
      };
   }
}
