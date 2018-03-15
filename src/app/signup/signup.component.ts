import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormErrorDisplayComponent } from './../form-error-display/form-error-display.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(2)]],
      lastName: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm_password: [null, [Validators.required, Validators.minLength(6)]]
    })

  }

  // Checks if a field is valid
  isFieldValid(field: string){
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  
  displayFieldCSS(field: string){
    return {
      'hasError': this.isFieldValid(field),
      'hasFeedback': this.isFieldValid(field)
    };
  }

  // Validates all form fields
  validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach( field => { // iterates throughout each key of the form and 
      //will retrieve the control object 
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }

  onSubmit = function(signup_details){
    if (this.form.valid){
      console.log('form submitted succesfully!');
    } else {
      // Validate all form fields
      this.validateAllFormFields(this.form);
    }
  }

}
