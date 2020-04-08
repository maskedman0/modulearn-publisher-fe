import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoaderComponent } from "./components/loader/loader.component";
import { StorageService } from "./service/storage.service";
import { DndDirective } from './directive/dnd.directive';

@NgModule({
   declarations: [LoaderComponent, DndDirective],
   imports: [CommonModule],
   providers: [StorageService],
   exports: [LoaderComponent, DndDirective],
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: [[StorageService]],
      };
   }
}
