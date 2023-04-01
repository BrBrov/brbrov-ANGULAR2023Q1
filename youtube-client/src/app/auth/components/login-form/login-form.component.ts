import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit{

  public formLogin: FormGroup;

  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  constructor(private buildForm: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.formLogin = this.buildForm.group({
      login: [''],
      password: ['']
    });
  }

  public onSubmit(): void {
    console.log(this.formLogin);
    const localData = localStorage.getItem('auth');
    if (!localData) this.event.emit('');
  }

  public toRegistration():void {
    this.route.navigate(['auth/registration']);
  }
}
