import { Component, OnInit } from "@angular/core";
import {
   FormGroup,
   FormBuilder,
   Validators,
   FormControl
} from "@angular/forms";
import { SelectItem } from "primeng/api/selectitem";

@Component({
   selector: "app-guide-form",
   templateUrl: "./guide-form.component.html",
   styleUrls: ["./guide-form.component.scss"]
})
export class GuideFormComponent implements OnInit {
   guideForm: FormGroup = undefined;
   difficultyOptions: SelectItem[] = [
      { label: "Easy", value: "easy" },
      { label: "Intermediate", value: "intermediate" },
      { label: "Advanced", value: "advanced" }
   ];

   unitOptions: SelectItem[] = [
      { label: "Minutes", value: "minute" },
      { label: "Hours", value: "hour" },
      { label: "Days", value: "day" },
      { label: "Weeks", value: "week" }
   ];

   constructor(private fb: FormBuilder) {}

   ngOnInit(): void {
      this.guideFormInit();
   }

   guideFormInit(): void {
      this.guideForm = this.fb.group({
         title: ["", Validators.required],
         intro: ["", Validators.required],
         difficulty: ["easy", Validators.required],
         estimatedCompletion: this.fb.group({
            timeNum: [null, Validators.required],
            unit: ["hour", Validators.required]
         }),
         previewMedia: this.fb.group({
            mediaType: [null, Validators.required],
            mediaUrl: [null, Validators.required],
            publicId: [null, Validators.required],
            input: [null, Validators.required]
         }),
         steps: this.fb.array([]),
         components: this.fb.array([]),
         ingredients: this.fb.array([])
      });
   }

   get gf_title(): FormControl {
      return this.guideForm.get("title") as FormControl;
   }
   get gf_intro(): FormControl {
      return this.guideForm.get("intro") as FormControl;
   }
   get gf_difficulty(): FormControl {
      return this.guideForm.get("difficulty") as FormControl;
   }

   get gf_estimatedCompletion(): FormGroup {
      return this.guideForm.get("estimatedCompletion") as FormGroup;
   }
   get gf_estimatedCompletion_timeNum(): FormControl {
      return this.gf_estimatedCompletion.get("timeNum") as FormControl;
   }
   get gf_estimatedCompletion_unit(): FormControl {
      return this.gf_estimatedCompletion.get("unit") as FormControl;
   }

   get gf_previewMedia(): FormGroup {
      return this.guideForm.get("previewMedia") as FormGroup;
   }
   get gf_previewMedia_mediaType(): FormControl {
      return this.gf_previewMedia.get("mediaType") as FormControl;
   }
   get gf_previewMedia_mediaUrl(): FormControl {
      return this.gf_previewMedia.get("mediaUrl") as FormControl;
   }
   get gf_previewMedia_publicId(): FormControl {
      return this.gf_previewMedia.get("publicId") as FormControl;
   }
   get gf_previewMedia_input(): FormControl {
      return this.gf_previewMedia.get("input") as FormControl;
   }
}
