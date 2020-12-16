import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { loginModule } from "./login/login.module";

@NgModule({
  imports: [BrowserModule, FormsModule, loginModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
