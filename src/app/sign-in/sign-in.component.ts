import { Component, OnInit } from "@angular/core";
import { LoaderState } from "@shared/service/loader.service";
import { Title } from "@angular/platform-browser";
import { StorageService } from "@shared/service/storage.service";
import {
   FormGroup,
   FormBuilder,
   Validators,
   FormControl
} from "@angular/forms";
import { AuthService } from "@core/auth/auth.service";
@Component({
   selector: "app-sign-in",
   templateUrl: "./sign-in.component.html",
   styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
   loginForm: FormGroup;
   loading: LoaderState = { show: false };
   submitted = false;

   constructor(
      private titleService: Title,
      private fb: FormBuilder,
      private storageService: StorageService,
      private authService: AuthService
   ) {}

   ngOnInit(): void {
      this.titleService.setTitle("Sign In | Modulearn Publisher");

      this.stylingInit();
      this.loginFormInit();
   }

   stylingInit(): void {
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("login-page");
      body.classList.remove("sidebar-mini");
   }

   loginFormInit(): void {
      this.loginForm = this.fb.group({
         email: ["", [Validators.required, Validators.email]],
         password: ["", [Validators.required, Validators.minLength(8)]]
      });
   }

   loginFormSubmit(): void {
      if (this.loginForm.valid) {
         this.loading.show = true;
         this.submitted = true;

         this.authService
            .login(this.loginForm.value)
            .then(result => {
               window.alert("Welcome back user.");
               this.storageService.token = result.data.token;
               location.reload();
            })
            .finally(() => {
               this.loading.show = false;
               this.submitted = false;
            });
      } else {
         this.submitted = true;

         [this.lf_email, this.lf_password].map((control: FormControl) =>
            control.markAsDirty()
         );
      }
   }

   /** DO NOT COMMIT! */
   loginFormPopulate(): void {
      this.loginForm.setValue({
         email: "publisher@email.com",
         password: "publisher123456"
      });
      this.loginForm.updateValueAndValidity();
   }
   /** DO NOT COMMIT! */

   get lf_email(): FormControl {
      return this.loginForm.get("email") as FormControl;
   }
   get lf_password(): FormControl {
      return this.loginForm.get("password") as FormControl;
   }
}
