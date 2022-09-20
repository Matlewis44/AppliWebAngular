import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  firstname: FormControl;
  email: FormControl;
  subject: FormControl;
  phone: FormControl;
  message: FormControl;
  contact: Contact | undefined

  /*Forme réactive*/
  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("", [Validators.required, Validators.minLength(2)])
    this.email = fb.control("", [Validators.email, Validators.required])
    this.subject = fb.control("", [ Validators.required, Validators.minLength(10)])
    this.phone = fb.control("", [Validators.required, Validators.minLength(5) ])
    this.message = fb.control("", [Validators.required, Validators.minLength(20)])


    this.contactForm = fb.group({
      firstname: this.firstname,
      email: this.email,
      subject: this.subject,
      phone: this.phone,
      message: this.message
    })
  }

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  handleSubmit(){
    this.contact = {
      firstname: this.firstname.value,
      email: this.email.value,
      subject: this.subject.value,
      phone: this.phone.value,
      message: this.message.value

    }
    console.log(this.contactForm.value);
  }

}
