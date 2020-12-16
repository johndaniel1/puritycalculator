import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Console } from "@angular/core/src/console";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  template: `
    <div class="login-container">
      <div class="login-content">
        <mat-toolbar class="login-toolbar" color="primary">
          Purity Calculator</mat-toolbar
        >
        <mat-card>
          <form [formGroup]="loginForm" novalidate (ngSubmit)="onSubmit()">
            <mat-form-field>
              <mat-icon matPrefix>edit</mat-icon>
              <input
                autofocus
                type="text"
                autocomplete="false"
                matInput
                placeholder="Enter the percentile value"
                formControlName="username"
              />
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>edit</mat-icon>
              <input
                type="text"
                autocomplete="false"
                matInput
                placeholder="Enter the weight in grams"
                formControlName="password"
              />
            </mat-form-field>

            <button type="submit" [disabled]="!loginForm.valid" mat-raised-button color="primary">
              Calculate
            </button>
            <button
              (click)="reset()"
              type="button"
              mat-raised-button
              color="green"
            ><b>
              Reset</b>
            </button>
          </form>
        </mat-card>
        <br />
        <mat-card *ngIf="pureweight > 0">
          <label
            ><b>{{ pureweight }}</b></label
          >
        </mat-card>
        <label>copywright by TamilMaran</label>
      </div>
    </div>
  `,
  styleUrls: ["./logincomponent.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class loginComponent implements OnInit {
  
  loginForm: FormGroup;
  pecentile = 0;
  totalweight = 0;
  pureweight: number;
  toggle = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForminit();
  }
  loginForminit(){
    this.loginForm = this.fb.group({
    username: [null,Validators.required],
    password: [null,Validators.required]
  });
  }

  onSubmit() {
    this.toggle = !this.toggle;
    this.pecentile = +this.loginForm.value.username;
    this.totalweight = +this.loginForm.value.password;
    this.pureweight = (this.pecentile * this.totalweight) / 100;
  }
  reset() {
    console.log("hi");
    this.pureweight=0;
    this.loginForm.reset();
  }
}
