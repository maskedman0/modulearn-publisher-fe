import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StorageService } from "./service/storage.service";

@NgModule({
   declarations: [LoaderComponent],
   imports: [CommonModule],
   providers: [StorageService],
   exports: [LoaderComponent]
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: [[StorageService]]
      };
   }
}
