import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { Console } from "@angular/core/src/console";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  template: `
    <div class="login-container">
      <div class="login-content">
        <br />
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

            <mat-form-field>
              <mat-icon matPrefix>edit</mat-icon>
              <input
                type="text"
                autocomplete="false"
                matInput
                placeholder="Enter the delta value"
                formControlName="deltaValue"
              />
            </mat-form-field>

            <button
              type="submit"
              [disabled]="!loginForm.valid"
              mat-raised-button
              color="primary"
            >
              Calculate
            </button>
            <button
              (click)="reset()"
              type="button"
              mat-raised-button
              color="green"
            >
              <b> Reset</b>
            </button>
          </form>
        </mat-card>
        <br />
        <mat-card *ngIf="pureweight">
          <div class="center">
            <label
              ><b> Total Purity in grams: {{ pureweight }}</b></label
            >
          </div>
        </mat-card>
        <div class="center">
          <br />
          <label>Copyright © 2020 TamilStark</label>
        </div>
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
  constant = 0;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForminit();
  }
  loginForminit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      deltaValue: [null, Validators.required]
    });
  }

  onSubmit() {
    this.toggle = !this.toggle;
    this.pecentile = +this.loginForm.value.username;
    this.totalweight = +this.loginForm.value.password;
    this.pureweight = (this.pecentile * this.totalweight) / 100;
    this.constant = +this.loginForm.value.deltaValue;
    this.pureweight = this.pureweight + this.constant;
  }
  reset() {
    this.pureweight = NaN;
    this.loginForm.reset();
  }
}
