import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UploadedFile } from '@shared/interfaces/uploaded-file.interface';
import { environment } from '@environments/environment';

@Injectable({
   providedIn: "root",
})
export class FileUploadService {

   private readonly mediaUploadUri = `${environment.api.mediaManagementUrl}/api/uploader`;

   constructor(private httpClient: HttpClient) {}

   uploadSingle(formData: FormData): Promise<UploadedFile> {
      return this.httpClient
         .post<UploadedFile>( `${this.mediaUploadUri}/single`, formData)
         .toPromise();
   }

}
