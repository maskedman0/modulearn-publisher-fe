import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
   selector: "app-media-form",
   templateUrl: "./media-form.component.html",
   styleUrls: ["./media-form.component.scss"],
})
export class MediaFormComponent implements OnInit {
   @Input() mediaForm: FormGroup;
   uploading = false;
   file: File = null;

   constructor() {}

   ngOnInit(): void {}

   /**
    * on file drop handler
    */
   onFileDropped(files: Array<File>) {
      this.prepareFile(files);
   }

   /**
    * handle file from browsing
    */
   fileBrowseHandler(files: Array<File>) {
      this.prepareFile(files);
   }

   /**
    * Convert Files list to normal array list
    * @param files (Files List)
    */
   prepareFile(files: Array<File>) {
      this.file = files[0];
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
