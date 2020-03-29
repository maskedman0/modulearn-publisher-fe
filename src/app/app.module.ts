import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./sign-in/sign-in.component";

@NgModule({
   declarations: [AppComponent, SignInComponent],
   imports: [
      ReactiveFormsModule,
      BrowserModule,
      AppRoutingModule,
      CoreModule.forRoot(),
      SharedModule.forRoot()
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
