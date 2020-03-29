import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoaderService, LoaderState } from "@shared/service/loader.service";
import { Subscription } from "rxjs";

@Component({
   selector: "app-loader",
   template: `
      <div [class.hidden]="!show">
         <div class="loader-overlay">
            <div *ngIf="show" class="loader"></div>
         </div>
      </div>
   `,
   styles: []
})
export class LoaderComponent implements OnInit, OnDestroy {
   public show = false;
   private subscription: Subscription;

   constructor(private loaderService: LoaderService) {}

   ngOnInit() {
      this.subscription = this.loaderService.loaderState.subscribe(
         (state: LoaderState) => {
            this.show = state.show;
         }
      );
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }
}
