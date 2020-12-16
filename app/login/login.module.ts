import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatToolbarModule } from "@angular/material";

import { loginComponent } from "./login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [loginComponent],
  exports: [loginComponent]
})
export class loginModule {}
