import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/components/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {
    email: "",
    password: "",
  }

  signinForm: FormGroup; //Conteneur qui va gérer notre formulaire
  email: FormControl;
  password: FormControl

  constructor(private fb: FormBuilder) {
    this.email = fb.control("", [Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)])

    this.signinForm = fb.group({
      email: this.email,
      password: this.password
    })
  }

  ngOnInit(): void {
  }

  handleConnexion(){
    console.log(this.signinForm.value)

  }
}
