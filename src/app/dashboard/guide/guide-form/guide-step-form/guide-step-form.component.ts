import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
   selector: "app-guide-step-form",
   templateUrl: "./guide-step-form.component.html",
   styleUrls: ["./guide-step-form.component.scss"],
})
export class GuideStepFormComponent implements OnInit {
   @Input() guideStepForm: FormGroup;
   @Input() index: number;

   constructor() { }

   ngOnInit(): void {
      console.log(this.guideStepForm);
      console.log(this.index);
   }
}
