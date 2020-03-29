import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";
import { IUserLogin } from "@shared/interfaces/user.interface";
import { ServerResponse } from "@shared/interfaces/server-response.interface";

@Injectable({
   providedIn: "root"
})
export class AuthService {
   private authUrl = `${environment.api.baseUrl}/api/v1/users/publisher/login`;

   constructor(private httpClient: HttpClient) {}

   async login(userCredentials: IUserLogin) {
      return this.httpClient
         .post<ServerResponse<{ token: string }>>(this.authUrl, userCredentials)
         .toPromise();
   }

   parseJwt(jwt: string) {
      const base64Url = jwt.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
   }
}
