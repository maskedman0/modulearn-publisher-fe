import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guide-step-form',
  templateUrl: './guide-step-form.component.html',
  styleUrls: ['./guide-step-form.component.scss']
})
export class GuideStepFormComponent implements OnInit {

  @Input() guideStepForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
