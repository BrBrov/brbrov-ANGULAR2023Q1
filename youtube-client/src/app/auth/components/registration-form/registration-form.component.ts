import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public registration: FormGroup;

  @Output() event: EventEmitter<AuthData> = new EventEmitter<AuthData>();

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    });
  }

  public onSubmit(): void {
    console.log(this.registration.value);
    this.event.emit(this.registration.value as AuthData);
  }

  public toLogin():void {
    this.route.navigate(['auth/login']);
  }
}
