import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/components/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /* TP 1
  firstname: string = ""
  names: string[] = []
  */

  /* Projet */

  user: User = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }


  signupForm: FormGroup; //Conteneur qui va gérer notre formulaire
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;

  /*Forme réactive*/
  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("", [Validators.required])
    this.lastname = fb.control("", [Validators.required])
    this.email = fb.control("", [Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)])
    this.passwordConfirm = fb.control("", [Validators.required, Validators.minLength(6)])


    this.signupForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    })
  }
  ngOnInit(): void {
  }

/* ***** TP 1 ***********
//On ajoute la chaine au tab. puis on le revide
  handleSave(){
    if(this.firstname){
      this.names.push(this.firstname)
      this.firstname = ""
    }
  }
  handleDelete(i: number){
    if(i >= 0){
      this.names.splice(i, 1)
      //this.firstname = ""
    }
  }
  handleUpdate(i: number){
    if(i >= 0){
      const name = this.names[i]
      this.names.splice(i, 1)
      this.firstname = name
    }
  }*/

  handleInscription(){
    console.log(this.signupForm.value)

  }
}
