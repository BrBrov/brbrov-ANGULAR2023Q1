import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit{

  public registration: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      name: '',
      surname: '',
      mail: '',
      password: ''
    })
  }

  public onSubmit():void {
    console.log(this.registration);
  }

  public toLogin():void {
    this.route.navigate(['auth/login']);
  }
}
