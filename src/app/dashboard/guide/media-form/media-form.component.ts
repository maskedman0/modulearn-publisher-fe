import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FileUploadService } from '@shared/service/file-upload.service';
import { UploadedFile } from '@shared/interfaces/uploaded-file.interface';

@Component({
   selector: "app-media-form",
   templateUrl: "./media-form.component.html",
   styleUrls: ["./media-form.component.scss"],
})
export class MediaFormComponent implements OnInit {
   @Input() mediaForm: FormGroup;
   isUploading = false;
   file: File = null;
   fileUrl = null;

   constructor(private fileUploadService: FileUploadService) {}

   ngOnInit(): void {}

   onFileDropped(files: Array<File>) {
      if (files.length > 0) {
         this.uploadFile(files);
      }
   }

   fileBrowseHandler(files: Array<File>) {
      if (files.length > 0) {
         this.uploadFile(files);
      }
   }

   uploadFile(files: Array<File>) {
      this.file = files[0];

      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
         window.alert('Only images are supported.');
         return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
         this.fileUrl = reader.result;
         this.isUploading = true;
      };


      const formData = new FormData();
      formData.append("screen", this.file, this.file.name);

      this.fileUploadService
         .uploadSingle(formData)
         .then((result: UploadedFile) => {
            this.mediaFormPopulate(result);
         })
         .finally(() => {
            this.isUploading = false;
            this.fileUrl = null;
         });
   }

   mediaFormPopulate(uploaded: UploadedFile): void {
      this.mf_mediaType.setValue(uploaded.mediaType);
      this.mf_mediaUrl.setValue(uploaded.mediaUrl);
      this.mf_publicId.setValue(uploaded.publicId);
      this.mf_input.setValue(uploaded.publicId);
   }

   get mf_mediaType(): FormControl {
      return this.mediaForm.get("mediaType") as FormControl;
   }
   get mf_mediaUrl(): FormControl {
      return this.mediaForm.get("mediaUrl") as FormControl;
   }
   get mf_publicId(): FormControl {
      return this.mediaForm.get("publicId") as FormControl;
   }
   get mf_input(): FormControl {
      return this.mediaForm.get("input") as FormControl;
   }
}
