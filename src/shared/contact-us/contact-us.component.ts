import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  captcha: string;
  email: string;

  constructor() {
    this.captcha = '',
    this.email = 'iamglover0@gmail.com';
  }

  reactiveForm!: FormGroup;
  

  ngOnInit() {
    this.reactiveForm = new FormGroup({
    });
  }


  resolved(captchaResponse: any){
    this.captcha = captchaResponse;
    console.log('Resolved captcha' + this.captcha);
  }
}
