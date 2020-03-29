import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";

@Injectable({
   providedIn: "root"
})
export class StorageService {
   constructor() {}

   get token() {
      return localStorage.getItem(environment.tokenName);
   }

   set token(token: string) {
      localStorage.setItem(environment.tokenName, token);
   }

   removeAll(): void {
      localStorage.clear();
   }
}
